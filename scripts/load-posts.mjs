import { readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const postsRoot = fileURLToPath(new URL('../src/data/posts', import.meta.url));

const collectJsFiles = async (directory) => {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const fullPath = path.join(directory, entry.name);

      if (entry.isDirectory()) {
        return collectJsFiles(fullPath);
      }

      if (entry.isFile() && entry.name.endsWith('.js') && entry.name !== 'index.js') {
        return fullPath;
      }

      return null;
    }),
  );

  return files.flat().filter(Boolean);
};

export const loadPosts = async () => {
  const files = await collectJsFiles(postsRoot);
  const modules = await Promise.all(
    files.map(async (file) => {
      const moduleUrl = pathToFileURL(file).href;
      const imported = await import(moduleUrl);
      return imported?.default ?? null;
    }),
  );

  return modules
    .filter((entry) => entry && entry.slug)
    .sort((a, b) => {
      const orderA = typeof a.order === 'number' ? a.order : Number.MAX_SAFE_INTEGER;
      const orderB = typeof b.order === 'number' ? b.order : Number.MAX_SAFE_INTEGER;

      if (orderA !== orderB) {
        return orderA - orderB;
      }

      return a.slug.localeCompare(b.slug);
    });
};

export default loadPosts;
