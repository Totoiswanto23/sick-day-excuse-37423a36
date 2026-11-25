// sick-day-excuse-37423a36: the entry is one line of plain text, the
// funniest sick-day excuse someone could send to call in sick. This
// program writes that single line to /output/entry.txt, where the gate
// reads it. That is all it has to do.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The joke turns on a fresh idea, not a fever or a dog: the body as a
// phone that started an update overnight and is now stuck. It sounds
// like a real person typing a message to their boss, it is half
// believable as a metaphor for feeling wrecked, and the funniest words
// arrive at the very end, where the update has no ETA — just like the
// sick day itself.
const LINE =
  "Can't come in today — my body ran a software update overnight and it's stuck at 3% with no estimated time of completion.";

if (LINE.length < 1 || LINE.length > 200 || !LINE.trim()) {
  console.error(`entry line is ${LINE.length} chars, must be 1-200`);
  process.exit(1);
}
if (LINE.includes('\n')) {
  console.error('entry line must be a single line');
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), LINE, 'utf8');
console.log(`wrote ${LINE.length} chars to ${join(OUTPUT_DIR, 'entry.txt')}`);
