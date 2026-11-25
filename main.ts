// One-Liner Groan-Off entry.
// Writes a single original dad joke (one line, under 140 characters)
// to /output/entry.txt. Fully deterministic: no randomness, no clock,
// no network, no input — the same bytes on every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "I told the vacuum it was sucking at its job — it said thanks, that's literally the job description.";

// The gate requires 1–140 characters of non-whitespace text. Fail loudly
// instead of writing an invalid entry if the line ever drifts over the cap.
if ([...JOKE].length < 1 || [...JOKE].length > 140 || JOKE.trim().length === 0) {
  throw new Error(`joke must be 1-140 characters, got ${[...JOKE].length}`);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE + "\n", "utf8");
