const { execSync } = require('node:child_process');

function fileList(cmd) {
  try { return execSync(cmd).toString().split('\n').filter(Boolean); }
  catch { return []; }
}

const base = process.env.VERCEL_GIT_PREVIOUS_SHA || 'origin/main';
let files = fileList(`git diff --name-only ${base}`);
if (files.length === 0) {
  // Fallback on fresh clones
  files = fileList('git ls-files');
}

const buildRelevant = files.filter(f =>
  !f.match(/\.(md|MD|png|jpg|jpeg|gif|svg|mp3|wav|mp4|mov|webm|pdf)$/) &&
  !f.startsWith('docs/') &&
  !f.startsWith('.github/')
);

if (buildRelevant.length === 0) {
  console.log('No build-relevant changes. Skipping Vercel build.');
  process.exit(0);
} else {
  console.log('Build-relevant changes detected:', buildRelevant.join(', '));
  process.exit(1);
}