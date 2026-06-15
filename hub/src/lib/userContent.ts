// Local, in-browser edits of the markdown documents. The hub is static, so
// edits persist to localStorage (per device) and are exported via download.
// The committed .md files remain the source of truth in git.
import { useCallback, useSyncExternalStore } from "react";
import type { Doc } from "./content";

const PREFIX = "oe-doc:";
const keyOf = (id: string) => PREFIX + id;

const listeners = new Set<() => void>();
function emit() {
  for (const l of listeners) l();
}

export function getOverride(id: string): string | null {
  try {
    return localStorage.getItem(keyOf(id));
  } catch {
    return null;
  }
}

export function setOverride(id: string, body: string) {
  try {
    localStorage.setItem(keyOf(id), body);
  } catch {
    /* storage full / unavailable */
  }
  emit();
}

export function clearOverride(id: string) {
  try {
    localStorage.removeItem(keyOf(id));
  } catch {
    /* ignore */
  }
  emit();
}

// Current body for a doc = local edit if present, otherwise the committed text.
export function currentBody(doc: Doc): string {
  return getOverride(doc.id) ?? doc.raw;
}

function subscribe(cb: () => void) {
  listeners.add(cb);
  window.addEventListener("storage", cb);
  return () => {
    listeners.delete(cb);
    window.removeEventListener("storage", cb);
  };
}

export function useDocBody(doc: Doc) {
  const override = useSyncExternalStore(
    subscribe,
    () => getOverride(doc.id),
    () => null
  );
  const body = override ?? doc.raw;
  const edited = override != null && override !== doc.raw;
  const save = useCallback((next: string) => setOverride(doc.id, next), [doc.id]);
  const reset = useCallback(() => clearOverride(doc.id), [doc.id]);
  return { body, edited, save, reset };
}
