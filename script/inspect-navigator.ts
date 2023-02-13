import { readFileSync, readdirSync } from "fs";
import { resolve } from "path";
import { fileURLToPath } from "url";

const filePath = "docs/algorithm/";
const excludeFileName = ["index.md"];

export function readYamlFontMatterTitle(path: string) {
  let ctx = readFileSync(path, "utf-8");
  const matchYamlFontMatter = /---([\s\S]*)---/;
  const matchTitle = /title\:/g;

  const matcher = ctx.match(matchYamlFontMatter);

  if (matcher) {
    const yamlList = matcher[1].split("\n").filter((val) => val);

    for (let each of yamlList) {
      if (matchTitle.test(each)) {
        return each.split(":")[1].trim();
      }
    }
  }
  return null;
}

function readMdFileName(path: string) {
  const fileList = readdirSync(path, "utf-8");
  const markDownNames: string[] = [];

  fileList.forEach((each) => {
    if (/\.md$/.test(each)) {
      markDownNames.push(each);
    }
  });

  return markDownNames.filter(val => !excludeFileName.includes(val));
}

// readMdFileName(filePath);

/**
 * 这里的path 只用于一个文件夹
 * @param {string} dirPath
 */
function generateToc(dirPath: string) {
  const mdNames = readMdFileName(dirPath);
  return mdNames
    .map((mdName) => {
      const title = readYamlFontMatterTitle(resolve(dirPath, mdName));
      console.log(resolve(dirPath, mdName));
      return `- [${title}](./${mdName})`;
    })
    .join("\n");
}

const dirPath = resolve(fileURLToPath(import.meta.url), "../..", filePath);
const val = generateToc(dirPath);
console.log(val);
