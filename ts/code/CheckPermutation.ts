/**
 * @author heart
 * @description
 * @Date 2022-09-27
 * @see https://leetcode.cn/problems/check-permutation-lcci/
 */
function CheckPermutation(s1: string, s2: string): boolean {
  if (s1.length !== s2.length) return false
  const map = new Map<string, number>()
  for (let i = 0; i < s1.length; i++) {
    const ch = s1.charAt(i)
    map.set(ch, map.has(ch) ? map.get(ch)! + 1 : 1)
  }
  for (let i = 0; i < s2.length; i++) {
    const ch = s2.charAt(i)
    if (!map.has(ch)) return false
    map.set(ch, map.get(ch)! - 1)
    if (map.get(ch) === 0) map.delete(ch)
  }
  return true
}
