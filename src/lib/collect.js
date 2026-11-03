// Saving into the notebook and the error log; both feed the spaced-repetition deck.
import { getState, update, slug } from './store';
import { addCard } from './srs';
import { uid } from './text.jsx';

export function addError({ wrong, right, type = '', explain = '', source = '' }) {
  if (!wrong || !right) return;
  const dup = Object.values(getState().errors).find((e) => e.wrong === wrong && e.right === right);
  if (dup) return dup.id;
  const id = uid();
  update('errors', id, { id, wrong, right, type, explain, source, createdAt: Date.now() });
  addCard(`e:${id}`, 'error', id);
  return id;
}

export function removeError(id) {
  update('errors', id, undefined);
  update('cards', `e:${id}`, undefined);
}

export function addNote(entry) {
  const id = slug(entry.text) || uid();
  const prev = getState().notebook[id];
  update('notebook', id, { ...prev, ...entry, id, createdAt: prev?.createdAt || Date.now() });
  addCard(`n:${id}`, 'note', id, entry.unit);
  return id;
}

export function removeNote(id) {
  update('notebook', id, undefined);
  update('cards', `n:${id}`, undefined);
}
