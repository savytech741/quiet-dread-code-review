// Two Days of Quiet Dread — one-line code review comment.
//
// The entry is a single line that approves a pull request while carrying
// quiet existential dread. The approval is genuine ("LGTM", clean diff,
// green tests) and the dread arrives flatly in the last clause, the way a
// tired reviewer would actually write it before clicking approve. It stays
// well under the 140-character gate.
//
// The program writes that line to $MAKEFUN_OUTPUT_DIR/entry.txt (default
// /output/entry.txt) and prints it to stdout.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "LGTM — clean diff, green tests, and a growing suspicion the code will outlive us all.";

function writeEntry(outputDir: string): string {
  const target = join(outputDir, "entry.txt");
  mkdirSync(outputDir, { recursive: true });
  writeFileSync(target, entry + "\n", "utf8");
  return target;
}

writeEntry(process.env.MAKEFUN_OUTPUT_DIR ?? "/output");
console.log(entry);
