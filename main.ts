// One Line, Zero Use: The Useless Superpower Sprint.
// This program writes a single original line naming a hilariously useless
// superpower to /output/entry.txt. The line is fixed and deterministic:
// every run writes exactly the same bytes.
import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";

// The line: a superpower whose flaw is specific, vivid, and pays off in
// the last few words. No explanation of the joke — the reader gets it.
const LINE =
  "I can stop time for exactly one second, once a year — and I always waste it blinking.";

// Empty a directory's CONTENTS only — never the directory itself, because
// in the grader /output is a mounted directory that cannot be removed.
function emptyDir(dir: string): void {
  mkdirSync(dir, { recursive: true });
  for (const name of readdirSync(dir)) {
    rmSync(`${dir}/${name}`, { recursive: true, force: true });
  }
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
emptyDir(outDir);
writeFileSync(`${outDir}/entry.txt`, LINE + "\n", "utf8");
