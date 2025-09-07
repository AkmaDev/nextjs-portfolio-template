import fs from "fs";
import path from "path";

const rootDir = process.cwd(); // ton projet actuel
const outputFile = path.join(rootDir, "PROJECT_DUMP.md");

// Extensions à inclure (tu peux adapter)
const allowedExtensions = [
  ".js",
  ".ts",
  ".tsx",
  ".jsx",
  ".json",
  ".css",
  ".md",
];

// Fonction récursive pour parcourir le projet
function readDirRecursive(dir, files = []) {
  for (const file of fs.readdirSync(dir)) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      if (file === "node_modules" || file.startsWith(".")) continue; // ignore
      readDirRecursive(filePath, files);
    } else {
      if (allowedExtensions.includes(path.extname(file))) {
        files.push(filePath);
      }
    }
  }
  return files;
}

// Génération du dump
function generateDump() {
  const files = readDirRecursive(rootDir);
  let content = "# 📦 Project Dump\n\n";

  for (const file of files) {
    const relativePath = path.relative(rootDir, file);
    const code = fs.readFileSync(file, "utf-8");
    content += `\n## 📄 ${relativePath}\n\n`;
    content += "```" + path.extname(file).slice(1) + "\n";
    content += code + "\n";
    content += "```\n";
  }

  fs.writeFileSync(outputFile, content, "utf-8");
  console.log(`✅ Dump écrit dans ${outputFile}`);
}

generateDump();
