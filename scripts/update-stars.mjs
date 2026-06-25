// Fetches the latest GitHub star counts for every agent framework and writes
// them back into src/content/agents/*.md so each build reflects current numbers.
//
// Runs as part of `npm run build`. It is intentionally non-fatal: if the
// network is unavailable or the GitHub API rate-limits us, the existing
// committed star values are kept and the build continues.

import { readdir, readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const AGENTS_DIR = join(__dirname, '..', 'src', 'content', 'agents');

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
  let files;
  try {
    files = (await readdir(AGENTS_DIR)).filter((f) => f.endsWith('.md'));
  } catch (err) {
    console.warn(`[update-stars] Could not read ${AGENTS_DIR}: ${err.message}. Skipping.`);
    return;
  }

  let updated = 0;
  for (const file of files) {
    const path = join(AGENTS_DIR, file);
    const content = await readFile(path, 'utf8');

    const githubMatch = content.match(/github:\s*"([^"]+)"/);
    if (!githubMatch) continue;
    const repo = parseRepo(githubMatch[1]);
    if (!repo) {
      console.warn(`[update-stars] Could not parse repo from ${githubMatch[1]} (${file}).`);
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
      console.warn(`[update-stars] Keeping existing stars for ${file}: ${err.message}`);
    }
  }

  console.log(`[update-stars] Done. Updated ${updated}/${files.length} file(s).`);
}

main();
