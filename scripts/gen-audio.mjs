// Render every listening script (and dictation sentence) to MP3 in public/audio/<unit>/.
// Usage: npm run audio            (skips files that already exist)
//        npm run audio -- --force (re-render everything)
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { synth } from './tts.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const force = process.argv.includes('--force');
const { allUnits } = await import(pathToFileURL(path.join(root, 'src/data/index.js')).href);

// Each synthesized line already carries a short natural silence at both ends,
// so dialogue turns are simply concatenated (MP3 frames join cleanly).
async function render(file, parts) {
  if (!force && fs.existsSync(file)) return console.log('skip', path.relative(root, file));
  const bufs = [];
  for (const [text, voice, rate] of parts) {
    for (let attempt = 1; ; attempt++) {
      try {
        bufs.push(await synth(text, voice, rate));
        break;
      } catch (e) {
        if (attempt >= 3) throw e;
        await new Promise((r) => setTimeout(r, 1500 * attempt));
      }
    }
  }
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, Buffer.concat(bufs));
  console.log('ok  ', path.relative(root, file));
}

for (const unit of allUnits) {
  const listening = unit.content?.listening;
  if (!listening) continue;
  const dir = path.join(root, 'public/audio', unit.id);
  for (const [i, l] of listening.entries()) {
    const voiceOf = (s) => l.voices[s] || Object.values(l.voices)[0];
    await render(path.join(dir, `l${i + 1}.mp3`), l.script.map(([s, text]) => [text, voiceOf(s), l.rate]));
    for (const [j, sentence] of (l.dictation || []).entries()) {
      await render(path.join(dir, `l${i + 1}-d${j + 1}.mp3`), [[sentence, Object.values(l.voices)[0], '-10%']]);
    }
  }
}
