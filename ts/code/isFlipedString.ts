/**
 * @author heart
 * @description
 * @Date 2022-09-30
 * @see https://leetcode.cn/problems/string-rotation-lcci/
 */
function isFlipedString(s1: string, s2: string): boolean {
  if (s1.length !== s2.length) return false
  if (s1.length === 0) return true
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] == s2[0]) {
      let right = 1 // s2指针
      while (right < s2.length) {
        if (s1[(right + i) % s1.length] !== s2[right]) break
        right++
      }
      if (right === s2.length) return true
    }
  }
  return false
}
