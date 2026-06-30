import sharp from 'sharp';
import { readdir, stat, rename, unlink } from 'node:fs/promises';
import { join, extname, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const TEAM_DIR = join(ROOT, 'public/team');
const BLOG_DIR = join(ROOT, 'public/blog');

async function fileSize(p) {
  try { return (await stat(p)).size; } catch { return 0; }
}

function fmt(bytes) {
  if (bytes > 1024 * 1024) return (bytes / 1024 / 1024).toFixed(2) + ' MB';
  return (bytes / 1024).toFixed(1) + ' KB';
}

async function processTeam() {
  const entries = await readdir(TEAM_DIR);
  let totalBefore = 0;
  let totalAfter = 0;
  for (const name of entries) {
    const ext = extname(name).toLowerCase();
    if (!['.png', '.jpg', '.jpeg'].includes(ext)) continue;
    const src = join(TEAM_DIR, name);
    const before = await fileSize(src);
    totalBefore += before;

    const tmp = src + '.tmp';
    const img = sharp(src).rotate().resize({
      width: 600,
      height: 600,
      fit: 'cover',
      position: 'attention',
    });

    if (ext === '.png') {
      await img.png({ quality: 80, compressionLevel: 9, palette: true }).toFile(tmp);
    } else {
      await img.jpeg({ quality: 80, mozjpeg: true }).toFile(tmp);
    }

    await unlink(src);
    await rename(tmp, src);
    const after = await fileSize(src);
    totalAfter += after;
    console.log(`team/${name}: ${fmt(before)} -> ${fmt(after)}`);
  }
  console.log(`\nTEAM total: ${fmt(totalBefore)} -> ${fmt(totalAfter)}\n`);
}

async function processBlog() {
  const targets = [
    { file: 'pishing.jpg', width: 1600, format: 'jpeg' },
    { file: 'security.jpg', width: 1600, format: 'jpeg' },
    { file: 'verfrut-cloud-cover.png', width: 1600, format: 'png' },
  ];
  let totalBefore = 0;
  let totalAfter = 0;
  for (const { file, width, format } of targets) {
    const src = join(BLOG_DIR, file);
    const before = await fileSize(src);
    if (!before) { console.log(`skip ${file} (not found)`); continue; }
    totalBefore += before;
    const tmp = src + '.tmp';
    const img = sharp(src).rotate().resize({ width, withoutEnlargement: true });
    if (format === 'png') {
      await img.png({ quality: 80, compressionLevel: 9 }).toFile(tmp);
    } else {
      await img.jpeg({ quality: 75, mozjpeg: true }).toFile(tmp);
    }
    await unlink(src);
    await rename(tmp, src);
    const after = await fileSize(src);
    totalAfter += after;
    console.log(`blog/${file}: ${fmt(before)} -> ${fmt(after)}`);
  }
  console.log(`\nBLOG total: ${fmt(totalBefore)} -> ${fmt(totalAfter)}`);
}

await processTeam();
await processBlog();
