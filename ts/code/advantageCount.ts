/**
 * @author heart
 * @description
 * @Date 2022-10-08
 * @see https://leetcode.cn/problems/advantage-shuffle/
 */
export function advantageCount(nums1: number[], nums2: number[]): number[] {
  nums1.sort((a, b) => a - b)
  const result: number[] = []
  let j = 0
  while (j < nums2.length) {
    let index = nums1.findIndex((val) => val > nums2[j])
    if (index === -1)  {
      index = 0
    }
    result.push(nums1[index])
    nums1.splice(index, 1)
    j++
  }
  return result
}