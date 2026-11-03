// Small text helpers shared by the UI.

// Render "**bold**" and line breaks inside plain strings.
export function Rich({ text }) {
  return String(text)
    .split('\n')
    .map((line, i, arr) => (
      <span key={i}>
        {line.split(/(\*\*[^*]+\*\*)/g).map((part, j) =>
          part.startsWith('**') ? <strong key={j}>{part.slice(2, -2)}</strong> : part,
        )}
        {i < arr.length - 1 && <br />}
      </span>
    ));
}

// Loose comparison for typed answers: case, curly quotes, ellipses, final punctuation and extra spaces don't matter.
export function normalize(s) {
  return String(s)
    .toLowerCase()
    .replace(/[’‘`]/g, "'")
    .replace(/[“”"]/g, '')
    .replace(/…|\.\.\./g, ' ')
    .replace(/[.,!?;:]+(\s|$)/g, '$1')
    .replace(/\s+/g, ' ')
    .trim();
}

export function isCorrect(value, answers) {
  const v = normalize(value);
  return v.length > 0 && answers.some((a) => normalize(a) === v);
}

export function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
