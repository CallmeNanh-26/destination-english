// Look up a word/phrase (free dictionary API for IPA + audio, Gemini for Vietnamese meaning)
// and save it into the notebook.
import { hasKey, lookupPhrase } from './ai';
import { addNote } from './collect';

async function freeDictionary(text) {
  const base = import.meta.env.DEV ? '/dict-api' : 'https://api.dictionaryapi.dev';
  const res = await fetch(`${base}/api/v2/entries/en/${encodeURIComponent(text.toLowerCase())}`);
  if (!res.ok) return null;
  const [entry] = await res.json();
  const phon = entry.phonetics?.find((p) => p.audio && p.text) || entry.phonetics?.find((p) => p.text) || {};
  const meaning = entry.meanings?.[0];
  return {
    ipa: entry.phonetic || phon.text || '',
    audio: entry.phonetics?.find((p) => p.audio)?.audio || '',
    pos: meaning?.partOfSpeech || '',
    en: meaning?.definitions?.[0]?.definition || '',
    ex: meaning?.definitions?.find((d) => d.example)?.example,
  };
}

export async function lookupAndSave(text, context, unit) {
  text = text.trim();
  const [dict, ai] = await Promise.all([
    freeDictionary(text).catch(() => null),
    hasKey() ? lookupPhrase(text, context).catch((e) => ({ error: e.message })) : null,
  ]);
  const entry = {
    text,
    unit,
    context: context || '',
    pos: ai?.pos || dict?.pos || '',
    ipa: ai?.ipa || dict?.ipa || '',
    audio: dict?.audio || '',
    vi: ai?.vi || '',
    en: ai?.en || dict?.en || '',
    ex: [context, ...(ai?.ex || (dict?.ex ? [dict.ex] : []))].filter(Boolean),
    col: ai?.col || [],
    syn: ai?.syn || [],
    ant: ai?.ant || [],
  };
  const id = addNote(entry);
  const warning = ai?.error
    ? ai.error
    : !hasKey()
      ? 'Chưa có Gemini key nên chưa có nghĩa tiếng Việt – bạn có thể tự điền trong Sổ tay.'
      : '';
  return { id, entry, warning };
}
