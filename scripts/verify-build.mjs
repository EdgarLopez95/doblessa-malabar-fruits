import fs from 'node:fs';
import path from 'node:path';

const dist = path.resolve('dist');
const htmlFiles = [];

function findHtml(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      findHtml(full);
    } else if (entry.name.endsWith('.html')) {
      htmlFiles.push(full);
    }
  }
}

findHtml(dist);
console.log(`Found ${htmlFiles.length} HTML files in dist/`);

let totalErrors = 0;

for (const file of htmlFiles) {
  const rel = path.relative(dist, file);
  const html = fs.readFileSync(file, 'utf-8');

  // 1. H1 count
  const h1Matches = html.match(/<h1\b[^>]*>/gi) || [];
  if (h1Matches.length !== 1) {
    console.error(`[ERROR] ${rel}: Found ${h1Matches.length} <h1> tags (expected exactly 1).`);
    totalErrors++;
  }

  // 2. href="#" (exact)
  if (/href=["']#["']/i.test(html)) {
    console.error(`[ERROR] ${rel}: Found href="#" empty anchor.`);
    totalErrors++;
  }

  // 3. meta robots noindex, follow
  if (!/<meta\s+name=["']robots["']\s+content=["']noindex,\s*follow["']/i.test(html)) {
    console.error(`[ERROR] ${rel}: Missing meta robots noindex, follow.`);
    totalErrors++;
  }

  // 4. Internal anchors check
  const ids = new Set();
  const idMatches = html.matchAll(/\bid=["']([^"']+)["']/gi);
  for (const m of idMatches) {
    ids.add(m[1]);
  }

  const hashLinks = html.matchAll(/href=["']#([^"']+)["']/gi);
  for (const m of hashLinks) {
    const anchor = m[1];
    if (!ids.has(anchor)) {
      console.error(`[ERROR] ${rel}: Anchor #${anchor} points to nonexistent ID.`);
      totalErrors++;
    }
  }

  // 5. Check links without base /doblessa-malabar-fruits/
  const hrefs = html.matchAll(/href=["']([^"']+)["']/gi);
  for (const m of hrefs) {
    const target = m[1];
    if (target.startsWith('/') && !target.startsWith('/doblessa-malabar-fruits') && !target.startsWith('//')) {
      console.error(`[ERROR] ${rel}: Internal absolute href without base: ${target}`);
      totalErrors++;
    }
  }

  // 6. Check src without base /doblessa-malabar-fruits/
  const srcs = html.matchAll(/src=["']([^"']+)["']/gi);
  for (const m of srcs) {
    const target = m[1];
    if (target.startsWith('/') && !target.startsWith('/doblessa-malabar-fruits') && !target.startsWith('//')) {
      console.error(`[ERROR] ${rel}: Internal asset src without base: ${target}`);
      totalErrors++;
    }
  }
}

if (totalErrors === 0) {
  console.log('✓ All HTML files passed all verification checks!');
} else {
  console.error(`Total errors found: ${totalErrors}`);
  process.exit(1);
}
