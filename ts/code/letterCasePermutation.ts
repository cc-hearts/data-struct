/**
 * @author heart
 * @description
 * @Date 2022-10-30
 */
function letterCasePermutation(s: string): string[] {
  const result: string[] = []
  function isCapital(num: number): boolean {
    return num >= 65 && num <= 90
  }
  function isUppercase(num: number): boolean {
    return num >= 97 && num <= 122
  }
  const dfs = (char: string, str: string) => {
    if (char === '') {
      result.push(str)
      return
    }
    const num = char.charCodeAt(0)
    if (isCapital(num)) {
      dfs(char.substring(1), str + String.fromCharCode(num + 32))
    } else if (isUppercase(num)) dfs(char.substring(1), str + String.fromCharCode(num - 32))
    dfs(char.substring(1), str + String.fromCharCode(num))
  }
  dfs(s, '')
  return result
}
