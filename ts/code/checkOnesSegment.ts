/**
 * @author heart
 * @description
 * @Date 2022-10-03
 */
function checkOnesSegment(s: string): boolean {
  let isFlag = true,
    num = 0
  while (num < s.length) {
    if (!isFlag && s[num] === '1') return false
    if (s[num] === '0') {
      isFlag = false // 连续1断开
    }
    num++
  }
  return true
}
