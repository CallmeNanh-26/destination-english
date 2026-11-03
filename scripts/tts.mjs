// Thin wrapper over msedge-tts: synthesize one line of text to an MP3 Buffer.
import { MsEdgeTTS, OUTPUT_FORMAT } from 'msedge-tts';

export async function synth(text, voice, rate = '+0%') {
  const tts = new MsEdgeTTS();
  await tts.setMetadata(voice, OUTPUT_FORMAT.AUDIO_24KHZ_48KBITRATE_MONO_MP3);
  const res = tts.toStream(text, { rate });
  const stream = res.audioStream ?? res;
  const chunks = [];
  await new Promise((resolve, reject) => {
    stream.on('data', (c) => chunks.push(c));
    stream.on('end', resolve);
    stream.on('close', resolve);
    stream.on('error', reject);
  });
  tts.close?.();
  return Buffer.concat(chunks);
}
