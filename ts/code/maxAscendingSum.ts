/**
 * @author heart
 * @description
 * @Date 2022-10-07
 * @see https://leetcode.cn/problems/maximum-ascending-subarray-sum/
 */
function maxAscendingSum(nums: number[]): number {
  let total = 0,
    temp = 0
  for (let i = 0; i < nums.length; i++) {
    if (i === 0) temp += nums[i]
    if (i > 0 && nums[i] > nums[i - 1]) {
      temp += nums[i]
    } else {
      total = Math.max(total, temp)
      temp = nums[i]
    }
  }
  total = Math.max(total, temp)
  return total
}
// console.log(maxAscendingSum([10, 20, 30, 5, 10, 50]))
// console.log(maxAscendingSum([10, 20, 30, 40, 50]))
