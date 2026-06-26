// Fetches the latest GitHub star counts for every agent framework and inference
// engine and writes them back into their src/content/**/*.md files so each build
// reflects current numbers.
//
// Runs as part of `npm run build`. It is intentionally non-fatal: if the
// network is unavailable or the GitHub API rate-limits us, the existing
// committed star values are kept and the build continues.

import { readdir, readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const CONTENT_DIR = join(__dirname, '..', 'src', 'content');
const COLLECTIONS = ['agents', 'inference'];

// Format a raw star count like 41234 into "41.2k".
function formatStars(n) {
  if (n < 1000) return String(n);
  const k = n / 1000;
  const value = k >= 100 ? Math.round(k) : Number(k.toFixed(1));
  return `${value}k`;
}

function parseRepo(githubUrl) {
  const match = githubUrl.match(/github\.com\/([^/]+)\/([^/#?]+)/);
  if (!match) return null;
  return { owner: match[1], repo: match[2].replace(/\.git$/, '') };
}

async function fetchStars(owner, repo) {
  const headers = { Accept: 'application/vnd.github+json', 'User-Agent': 'openllmstack-build' };
  if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;

  const res = await fetch(`https://api.github.com/repos/${owner}/${repo}`, { headers });
  if (!res.ok) throw new Error(`GitHub API ${res.status} for ${owner}/${repo}`);
  const data = await res.json();
  return data.stargazers_count;
}

async function main() {
  let updated = 0;
  let total = 0;

  for (const collection of COLLECTIONS) {
    const dir = join(CONTENT_DIR, collection);
    let files;
    try {
      files = (await readdir(dir)).filter((f) => f.endsWith('.md'));
    } catch (err) {
      console.warn(`[update-stars] Could not read ${dir}: ${err.message}. Skipping.`);
      continue;
    }

    for (const file of files) {
      total++;
      const path = join(dir, file);
      const content = await readFile(path, 'utf8');

      const githubMatch = content.match(/github:\s*"([^"]+)"/);
      if (!githubMatch) continue;
      const repo = parseRepo(githubMatch[1]);
      if (!repo) {
        console.warn(`[update-stars] Could not parse repo from ${githubMatch[1]} (${collection}/${file}).`);
        continue;
      }

      try {
        const count = await fetchStars(repo.owner, repo.repo);
        const stars = formatStars(count);
        const next = content.replace(/stars:\s*"[^"]*"/, `stars: "${stars}"`);
        if (next !== content) {
          await writeFile(path, next);
          console.log(`[update-stars] ${repo.owner}/${repo.repo} -> ${stars}`);
          updated++;
        }
      } catch (err) {
        console.warn(`[update-stars] Keeping existing stars for ${collection}/${file}: ${err.message}`);
      }
    }
  }

  console.log(`[update-stars] Done. Updated ${updated}/${total} file(s).`);
}

main();
