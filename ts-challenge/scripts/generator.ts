import { writeFileSync } from "fs";

export interface IAnnotate {
  number: string;
  url: string;
  name: string;
}
export function parseAnnotate(str: string): IAnnotate | void {
  const reg = /@Number\s*(.*)|@see\s*(.*)/gm;
  const matcher = str.match(reg);
  if (matcher) {
    let [number, url] = matcher;
    number && (number = number.replace(/@Number\s*/, ""));
    let name;
    if (url) {
      url = url.replace(/@see\s*/, "");
      const [allName] = url.split("/").slice(-2);
      [name] = allName.split("-").slice(-1);
    }
    return {
      number,
      url,
      name,
    };
  }
}

export function genMarkdownFile(iList: IAnnotate[], path: string) {
  let str = ``;

  iList.forEach((val) => {
    str += `- ${val.number} - ${val.name} - <${val.url}> \n`;
  });
  writeFileSync(path, str, { encoding: "utf8" });
}
