// Google Gemini (free tier) called straight from the browser with the user's own key.
import { getState } from './store';

export function hasKey() {
  return Boolean(getState().settings.geminiKey);
}

// Tried in order after the model chosen in Settings when Google answers "overloaded", "quota" or "not found".
const FALLBACK_MODELS = ['gemini-2.5-flash', 'gemini-3.5-flash', 'gemini-flash-lite-latest', 'gemini-2.5-flash-lite'];
// Light models answer fastest; used straight away once a model has been too slow.
const FAST_MODELS = ['gemini-flash-lite-latest', 'gemini-2.5-flash-lite'];
const RETRYABLE = [404, 429, 500, 503, 'timeout'];
const SLOW_FOR_MS = 10 * 60000; // skip a model that timed out for this long
let lastGood; // model that answered most recently in this session; tried first next time
const slowUntil = {}; // model -> ms
const noThinkingConfig = new Set(); // models that reject the thinking setting

// Text requests should be quick; audio needs time to upload and listen to the clip.
const timeoutFor = (audio) => (audio ? 60000 + Math.min(60000, (audio.base64.length / 1e6) * 15000) : 40000);

export async function askGemini(prompt, opts = {}) {
  const { geminiKey, model } = getState().settings;
  if (!geminiKey) throw new Error('Chưa có Gemini API key. Vào mục Cài đặt để thêm key.');
  const now = Date.now();
  let models = [...new Set([lastGood, model || 'gemini-flash-latest', ...FALLBACK_MODELS].filter(Boolean))];
  models = [...models.filter((m) => !(slowUntil[m] > now)), ...models.filter((m) => slowUntil[m] > now)];
  let lastError;
  let timeouts = 0;
  for (const m of models) {
    // After a timeout, only a light model is worth waiting for; give up after two slow attempts.
    if (timeouts && !FAST_MODELS.includes(m)) continue;
    if (timeouts >= 2) break;
    try {
      opts.onStatus?.(timeouts ? 'Mô hình chính chậm, đang chuyển sang mô hình nhanh hơn…' : '');
      const out = await callModel(m, geminiKey, prompt, opts);
      lastGood = m;
      return out;
    } catch (e) {
      lastError = e;
      if (!RETRYABLE.includes(e.status)) throw e;
      if (e.status === 'timeout') {
        timeouts++;
        slowUntil[m] = Date.now() + SLOW_FOR_MS;
        if (lastGood === m) lastGood = undefined;
      }
    }
  }
  if (lastError.status === 429) throw new Error('Đã chạm giới hạn miễn phí của Gemini, thử lại sau ít phút.');
  if (lastError.status === 'timeout')
    throw new Error('Gemini đang chậm, hãy bấm gửi lại. Mẹo: câu trả lời nói dưới 1 phút sẽ được chấm nhanh hơn.');
  throw new Error('Gemini đang quá tải, hãy thử lại sau ít phút.');
}

// Thinking makes answers slower; grading does not need it.
function thinkingFor(model) {
  if (noThinkingConfig.has(model) || /pro/.test(model)) return {};
  if (/2\.5/.test(model)) return { thinkingConfig: { thinkingBudget: 0 } };
  return { thinkingConfig: { thinkingLevel: 'low' } };
}

async function callModel(model, geminiKey, prompt, opts) {
  try {
    return await callModelOnce(model, geminiKey, prompt, opts);
  } catch (e) {
    // Some models do not accept the thinking setting: remember that and ask again without it.
    if (e.status === 400 && /thinking/i.test(e.message) && !noThinkingConfig.has(model)) {
      noThinkingConfig.add(model);
      return callModelOnce(model, geminiKey, prompt, opts);
    }
    throw e;
  }
}

async function callModelOnce(model, geminiKey, prompt, { audio, json = true, schema }) {
  const parts = [{ text: prompt }];
  if (audio) parts.push({ inline_data: { mime_type: audio.mime, data: audio.base64 } });
  const base = import.meta.env.DEV ? '/gemini-api' : 'https://generativelanguage.googleapis.com';
  const ctl = new AbortController();
  const timer = setTimeout(() => ctl.abort(), timeoutFor(audio));
  const res = await fetch(
    `${base}/v1beta/models/${encodeURIComponent(model)}:generateContent`,
    {
      signal: ctl.signal,
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-goog-api-key': geminiKey },
      body: JSON.stringify({
        contents: [{ role: 'user', parts }],
        generationConfig: {
          temperature: 0.4,
          ...thinkingFor(model),
          ...(json ? { responseMimeType: 'application/json' } : {}),
          ...(schema ? { responseSchema: schema } : {}),
        },
      }),
    },
  )
    .catch((e) => {
      if (e.name !== 'AbortError') throw new Error('Không kết nối được tới Gemini – kiểm tra mạng / VPN.');
      const err = new Error('AI phản hồi quá lâu, hãy thử lại.');
      err.status = 'timeout';
      throw err;
    })
    .finally(() => clearTimeout(timer));
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    const err = new Error('Lỗi Gemini: ' + (data?.error?.message || res.statusText));
    err.status = res.status;
    throw err;
  }
  const text = data?.candidates?.[0]?.content?.parts?.map((p) => p.text || '').join('') ?? '';
  if (!json) return text;
  try {
    return JSON.parse(text.replace(/^```json\s*|```$/g, ''));
  } catch {
    throw new Error('AI trả về dữ liệu không đọc được, hãy thử lại.');
  }
}

const TUTOR = `You are an experienced IELTS examiner and English teacher for a Vietnamese learner (current level B1, target IELTS 7.5).
Explanations must be in Vietnamese; English examples stay in English. Be precise, encouraging and concrete.`;

export function gradeTranslation({ vi, ref, focus, answer }) {
  return askGemini(`${TUTOR}
Task: The learner translated a Vietnamese sentence into English.
Vietnamese: "${vi}"
Reference translation: "${ref}"
Target language point: ${focus || 'general'}
Learner's answer: "${answer}"

Judge meaning, grammar, word choice and naturalness. Accept any correct, natural alternative (not only the reference).
Return JSON:
{"score": 0-10, "verdict": "đúng" | "gần đúng" | "chưa đúng",
 "corrected": "the learner's sentence minimally corrected",
 "errors": [{"wrong": "...", "right": "...", "type": "grammar|vocabulary|collocation|word order|spelling|naturalness", "explain": "giải thích tiếng Việt"}],
 "better": "a more natural / higher-level version (IELTS 7.5 style)",
 "tip": "một mẹo ngắn bằng tiếng Việt"}`);
}

export function gradeSpeaking({ topic, question, answer, audio, mode, onStatus }) {
  const source =
    mode === 'voice'
      ? 'The learner answered by voice (audio attached). First transcribe exactly what they said (keep their mistakes), then evaluate it. Also comment on pronunciation, stress, intonation and fluency based on the audio.'
      : `The learner wrote this answer: """${answer}"""`;
  return askGemini(
    `${TUTOR}
Speaking practice. Topic: ${topic}. Question: "${question}"
${source}

Return JSON:
{"transcript": "what the learner said/wrote",
 "band": "estimated IELTS band for this answer, e.g. 5.5",
 "summary": "nhận xét tổng quan tiếng Việt (2-3 câu): điểm mạnh và điểm cần cải thiện",
 "criteria": {"fluency": "...", "lexical": "...", "grammar": "...", "pronunciation": "${mode === 'voice' ? 'nhận xét phát âm cụ thể (âm cuối, trọng âm, ngữ điệu...)' : 'không áp dụng'}"},
 "corrections": [{"wrong": "exact wrong phrase", "right": "corrected phrase", "type": "grammar|vocabulary|collocation|word order|tense|article|preposition|pronunciation", "explain": "vì sao sai, tiếng Việt"}],
 "upgrades": [{"basic": "plain phrase the learner used", "better": "more sophisticated alternative (band 7+)", "note": "khi nào dùng, tiếng Việt"}],
 "model_answer": "a natural band 7.5-8 answer to the same question, 4-7 sentences, reusing the learner's ideas",
 "key_phrases": ["useful band 7+ phrases/collocations from the model answer"],
 "drills": [{"t": "gap" | "rewrite", "q": "exercise sentence; use ___ for the gap", "answer": ["accepted answer"], "explain": "giải thích tiếng Việt"}]}
Make 3-4 drills that target exactly the learner's mistakes and weak points. If there are no mistakes, drill the upgrades.
Give 3-5 upgrades. Every upgrade MUST have a non-empty "better" written in English (never leave it blank).
Keep every Vietnamese explanation short (one sentence).`,
    { audio, schema: SPEAKING_SCHEMA, onStatus },
  );
}

// Structured output so required fields (e.g. upgrades[].better) are never dropped.
const str = { type: 'STRING' };
const strList = { type: 'ARRAY', items: str };
const obj = (properties) => ({ type: 'OBJECT', properties, required: Object.keys(properties) });
const SPEAKING_SCHEMA = obj({
  transcript: str,
  band: str,
  summary: str,
  criteria: obj({ fluency: str, lexical: str, grammar: str, pronunciation: str }),
  corrections: { type: 'ARRAY', items: obj({ wrong: str, right: str, type: str, explain: str }) },
  upgrades: { type: 'ARRAY', items: obj({ basic: str, better: str, note: str }) },
  model_answer: str,
  key_phrases: strList,
  drills: { type: 'ARRAY', items: obj({ t: { type: 'STRING', enum: ['gap', 'rewrite'] }, q: str, answer: strList, explain: str }) },
});

const TASKS_SCHEMA = {
  type: 'ARRAY',
  items: obj({ vi: str, ref: str, focus: str }),
};

// Vietnamese sentences for the learner to translate, each built around chosen words.
export function makeTranslationTasks(words, count = 6) {
  return askGemini(
    `${TUTOR}
Create ${count} Vietnamese sentences for the learner to translate into English. Each sentence must require using one or more of these target words/phrases naturally (spread them out so every target is practised at least once if possible):
${words.map((w) => `- ${w}`).join('\n')}

Mix difficulty from B1 to B2/IELTS 7, vary tenses and contexts (daily life, study, work, opinions). Vietnamese must sound natural.
Return a JSON array: [{"vi": "câu tiếng Việt", "ref": "natural English reference translation", "focus": "the target word(s) used"}]`,
    { schema: TASKS_SCHEMA },
  );
}

export function lookupPhrase(text, context) {
  return askGemini(`${TUTOR}
Dictionary entry for the English word or phrase "${text}"${context ? ` as used in: "${context}"` : ''}.
Return JSON:
{"text": "${text}", "pos": "part of speech / phrase type", "ipa": "British IPA, e.g. /ˈkɒmpətɪʃn/",
 "vi": "nghĩa tiếng Việt ngắn gọn (theo ngữ cảnh nếu có)", "en": "short English definition",
 "ex": ["2 natural example sentences"], "col": ["3-5 common collocations"], "syn": ["synonyms"], "ant": ["antonyms if any"]}`);
}
