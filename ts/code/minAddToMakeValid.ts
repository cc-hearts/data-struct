/**
 * @author heart
 * @description
 * @Date 2022-10-04
 * @see https://leetcode.cn/problems/minimum-add-to-make-parentheses-valid/
 */
function minAddToMakeValid(s: string): number {
  let left = 0,
    right = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') left++
    else {
      if (left !== 0) left--
      else right++
    }
  }
  return left + right
}
