/**
 * 「カウンセリング無料」系を、完全一致に頼らず行単位で検出する。
 * 実行: npm run check:consultation-copy
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

const SCAN_DIRS = ["app", "lib"].map((d) => path.join(root, d));

/** 1行に対する禁止パターン（ catastrophic backtracking を避ける単純な RegExp のみ） */
const LINE_RULES = [
  { label: "無料のカウンセリング／無料カウンセリング", re: /無料の?カウンセリング/ },
  { label: "カウンセリング無料（連結）", re: /カウンセリング無料/ },
  { label: "「は無料」", re: /は無料/ },
  { label: "無料です（行内にカウンセリングまたはご相談）", re: /無料です/ },
  { label: "無料で（行内にカウンセリング）", re: /無料で/ },
];

function walkFiles(dir, acc = []) {
  if (!fs.existsSync(dir)) return acc;
  for (const name of fs.readdirSync(dir)) {
    if (name === "node_modules" || name === ".next") continue;
    const full = path.join(dir, name);
    const st = fs.statSync(full);
    if (st.isDirectory()) walkFiles(full, acc);
    else if (/\.(tsx|ts|jsx|js)$/.test(name) && !name.endsWith(".d.ts")) acc.push(full);
  }
  return acc;
}

function lineMatchesForbidden(line, rule) {
  if (!rule.re.test(line)) return false;
  if (rule.re.source.includes("無料です") || rule.re.source.includes("無料で")) {
    return /カウンセリング|ご相談|初診|初回/.test(line);
  }
  return true;
}

const files = SCAN_DIRS.flatMap((d) => walkFiles(d));
const hits = [];

for (const file of files) {
  const rel = path.relative(root, file);
  const lines = fs.readFileSync(file, "utf8").split("\n");
  lines.forEach((line, i) => {
    for (const rule of LINE_RULES) {
      rule.re.lastIndex = 0;
      if (lineMatchesForbidden(line, rule)) {
        hits.push({
          file: rel,
          line: i + 1,
          label: rule.label,
          snippet: line.trim().slice(0, 200),
        });
      }
    }
  });
}

if (hits.length) {
  console.error("カウンセリング「無料」系の疑わしい表現が見つかりました:\n");
  for (const h of hits) {
    console.error(`- [${h.label}] ${h.file}:${h.line}\n  ${h.snippet}\n`);
  }
  process.exit(1);
}

console.log("check:consultation-copy OK（疑わしい「無料」表現なし）");
