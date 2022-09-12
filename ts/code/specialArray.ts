/**
 * @author heart
 * @description
 * @Date 2022-09-12
 * @see https://leetcode.cn/problems/special-array-with-x-elements-greater-than-or-equal-x/
 */
export function specialArray(nums: number[]): number {
  // 处理特殊情况
  if (nums.length === 1) {
    for (let i = 1; i <= 1000; i++) {
      if (i < nums[0]) return i
    }
    return -1
  }
  // 排序 + 二分
  // 根据值二分
  nums.sort((a, b) => a - b)
  let left = 0,
    right = 1e3,
    middle = ~~(left + ((right - left) >> 1))
  // 如果比最大的值都要大
  if (middle > nums[nums.length - 1]) {
    right = middle
  }
  if (middle < nums[0]) {
    left = middle
  }
  while (left < right) {
    middle = ~~(left + ((right - left) >> 1))
    // middle 在范围内
    let count = -1
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] >= middle) {
        count = nums.length - i
        break
      }
    }
    // 有count个元素应该大于等于middle
    if (count === middle) {
      return count
    } else right--
  }
  return -1
}
