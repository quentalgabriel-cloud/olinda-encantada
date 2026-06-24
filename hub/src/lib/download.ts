// Client-side file downloads (the hub is a static site — no backend).
export function downloadBlob(filename: string, blob: Blob) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

export function downloadText(filename: string, text: string, mime = "text/plain;charset=utf-8") {
  downloadBlob(filename, new Blob([text], { type: mime }));
}

export const downloadMarkdown = (filename: string, md: string) =>
  downloadText(filename.endsWith(".md") ? filename : `${filename}.md`, md, "text/markdown;charset=utf-8");

// Last path segment of a repo file path, e.g. "docs/01-biblia.md" -> "01-biblia.md".
export const fileBase = (path: string) => path.split("/").pop() || "documento.md";

// Safe filename from an arbitrary label (strips accents and non-alphanumerics).
export const slugFile = (label: string, ext: string) =>
  `${label
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")}.${ext}`;
