import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const TEXT = "Grandmother's wrinkled hands lifted the wok lid and the steam smelled of fresh rice and garlic, and I stood on a stool stealing the crisped edges while she pretended not to notice.";

const scriptDir = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR
  ? resolve(scriptDir, process.env.MAKEFUN_OUTPUT_DIR)
  : "/output";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
