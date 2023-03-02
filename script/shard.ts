import glob from 'glob'
import { resolve } from 'path'

export function getMarkdownPath(filePath: string): Promise<Array<string>> {
  return new Promise(async (res, reject) => {
    const path = resolve(process.cwd(), filePath, '**/*\.{md,}')
    try {
      const files = await glob(path)
      console.log(`${path} is:`, files);
      res(files)
    } catch (e) {
      console.log(e);
      reject(e)
    }
  })
}