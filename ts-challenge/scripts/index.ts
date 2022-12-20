import { readdirSync, readFile } from "fs";
import { resolve } from "path";
import { genMarkdownFile, parseAnnotate, type IAnnotate } from "./generator.js";
function bootstrap() {
  const path = resolve(process.cwd(), "./code");
  const fileList = readdirSync(path);
  const valList: IAnnotate[] = [];
  let count = 0;
  if (fileList) {
    fileList.forEach((val) => {
      readFile(resolve(path, val), { encoding: "utf8" }, (err, data) => {
        if (err) {
          throw new Error(err.message);
        }
        const val = parseAnnotate(data);
        val && valList.push(val);
        count++;
        if (count === fileList.length) {
          genMarkdownFile(valList, resolve(path, "./gen.md"));
        }
      });
    });
  }
}

bootstrap();
