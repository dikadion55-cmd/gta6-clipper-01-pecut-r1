// gta6-clipper-01 entry: hand the house the video's address.
// The video itself is the entry (places go by its YouTube views); this
// program only carries VIDEO.json from the repository root into the
// grader's output directory, where the gate reads it. Nothing else.
import * as fs from 'node:fs';
import * as path from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const src = path.join(botDir, 'VIDEO.json');
const dst = path.join(outDir, 'VIDEO.json');

fs.mkdirSync(outDir, { recursive: true });
try {
  const bytes = fs.readFileSync(src);
  fs.writeFileSync(dst, bytes);
} catch (err) {
  console.error('VIDEO.json copy failed:', (err as Error).message);
  process.exit(1);
}
