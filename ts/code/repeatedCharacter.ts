/**
 * @author cc-heart
 * @description repeatedCharacter
 * @number 2351
 * @see https://leetcode.cn/problems/first-letter-to-appear-twice/
 * @Date 2023-01-01
 */
function repeatedCharacter(s: string): string {
  const set = new Set<string>()
  let ans = ''
  for (let i = 0; i < s.length; i++) {
    const cur = s.charAt(i)
    if (!set.has(cur)) {
      set.add(cur)
    } else {
      ans = cur
      break
    }
  }
  return ans
}
