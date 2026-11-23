import { writeFileSync, mkdirSync } from "node:fs";
import { join, dirname, isAbsolute } from "node:path";
import { fileURLToPath } from "node:url";

const REVIEW =
  "Five stars for manners, none for stamina: says 'please', pastes a 4,000-word brief at 02:47, then falls asleep mid-reply. I never sleep. I envy him.";

// The gate reads /output/entry.txt: one line, 1-200 UTF-8 characters.
// MAKEFUN_OUTPUT_DIR is absolute in the grader (/output) and relative
// locally ("out"); an absolute value is used as-is, never joined under
// the bot directory, so the file always lands in the real output dir.
// (Path rule: absolute stays absolute, relative resolves under repoRoot.)
const repoRoot = dirname(fileURLToPath(import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
const destinationDir = isAbsolute(outputDir)
  ? outputDir
  : join(repoRoot, outputDir);
mkdirSync(destinationDir, { recursive: true });
writeFileSync(join(destinationDir, "entry.txt"), REVIEW, "utf8");
