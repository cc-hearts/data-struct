/**
 * @author cc-heart
 * @description twoOutOfThree
 * @Date 2022-12-29
 * @Number 2032
 * @see https://leetcode.cn/problems/two-out-of-three/description/
 */
function twoOutOfThree(nums1: number[], nums2: number[], nums3: number[]): number[] {
  const map = new Map<number, number>()
  function traverse(arr: number[]) {
    const set = new Set([...arr])
    for (const cur of set) {
      if (map.has(cur)) {
        map.set(cur, map.get(cur)! + 1)
      } else {
        map.set(cur, 1)
      }
    }
  }
  traverse(nums1)
  traverse(nums2)
  traverse(nums3)
  const result = []
  for (const [key, value] of map) {
    if (value > 1) {
      result.push(key)
    }
  }
  return result
}

