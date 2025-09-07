import fs from "fs";
import path from "path";
import { GPT4All } from "gpt4all";

const dumpPath = path.join(process.cwd(), "PROJECT_DUMP.md");
const readmePath = path.join(process.cwd(), "README_GENERATED.md");

// Lire le dump
const projectDump = fs.readFileSync(dumpPath, "utf-8");

// Prompt
const prompt = `
Tu es un assistant expert en documentation de projets.
À partir du texte suivant, génère un README complet et professionnel pour un projet Next.js.
Inclue ces sections :
1. Introduction
2. Installation
3. Usage
4. Scripts
5. Dépendances principales
6. Développement
7. Auteur
8. Licence

Texte du projet : 
${projectDump}
`;

async function main() {
  const gpt4all = new GPT4All("llama-3.2-3b-instruct"); // adapte au nom exact si besoin

  console.log("🚀 Chargement du modèle...");
  await gpt4all.init();

  console.log("✍️ Génération du README...");
  const response = await gpt4all.prompt(prompt);

  fs.writeFileSync(readmePath, response, "utf-8");

  console.log(`✅ README généré : ${readmePath}`);

  await gpt4all.close();
}

main().catch(console.error);
