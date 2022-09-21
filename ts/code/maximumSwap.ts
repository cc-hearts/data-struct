/**
 * @author heart
 * @description 根据题意模拟答案即可
 * @Date 2022-09-13
 * @see https://leetcode.cn/problems/maximum-swap/
 */
function maximumSwap(num: number): number {
  let result = num
  const list: number[] = []
  while (num != 0) {
    list.unshift(num % 10)
    num = ~~(num / 10)
  }
  if (list.length === 1) return list[0]
  let left = 0
  while (left < list.length) {
    // 和后面最大的交换
    let max = list[left]
    let index = -1
    for (let i = left + 1; i < list.length; i++) {
      if (list[left] < list[i]) {
        // 交换顺序 并且比较大小
        if (list[i] >= max) {
          max = list[i]
          index = i
        }
      }
    }
    if (index > -1) {
      // 交换顺序并且合并
      let ans = 0
      for (let i = 0; i < list.length; i++) {
        let r = list[i]
        if (i === left) {
          r = list[index]
        } else if (i === index) {
          r = list[left]
        }
        ans = ans = ans * 10 + r
      }
      result = Math.max(result, ans)
    }
    left++
  }
  return result
}
