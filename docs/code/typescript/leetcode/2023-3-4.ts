/**
 * @title 982. 按位与为零的三元组
 * @description 给你一个整数数组 nums ，返回其中 按位与三元组 的数目。
 * 按位与三元组 是由下标 (i, j, k) 组成的三元组，并满足下述全部条件：
 * 0 <= i < nums.length
 * 0 <= j < nums.length
 * 0 <= k < nums.length
 * nums[i] & nums[j] & nums[k] == 0 ，其中 & 表示按位与运算符。
 */
export function countTriplets(nums: number[]): number {
  const set = []
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      set.push(nums[i] & nums[j])
    }
  }

  let res = 0
  for (const i of nums) {
    for (const iterator of set) {
      if ((i & iterator) === 0) res++
    }
  }
  return res
};
