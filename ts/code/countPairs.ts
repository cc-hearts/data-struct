/**
 * @author cc-heart
 * @description
 * @Date 2023-01-05
 */

export function countPairs(nums: number[], low: number, high: number) {
  let ans = 0
  for (let i = 0; i < nums.length; i++) {
    const cur = nums[i]
    for (let j = i + 1; j < nums.length; j++) {
      const res = cur ^ nums[j]
      if (res >= low && res <= high) {
        ans++
      }
    }
  }
  return ans
  
}
