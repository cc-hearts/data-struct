/**
 * @author heart
 * @description 贪心
 * @Date 2022-12-21
 * @see https://leetcode.cn/problems/maximum-score-from-removing-stones/description/
 */
function maximumScore(a: number, b: number, c: number): number {
  const total = a + b + c
  const maxVal = Math.max(a, b, c)
  return Math.min(total - maxVal, Math.floor(total / 2))
}
