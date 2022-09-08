/**
 * @author heart
 * @description
 * @Date 2022-09-08
 * @see https://leetcode.cn/problems/4sum/
 */

export function fourSum(nums: number[], targets: number): number[][] {
  const result: Array<number[]> = []
  if (nums.length < 4) {
    return result
  }
  const length = nums.length
  nums.sort((a: number, b: number) => a - b)
  // 排序完之后 如果有 a + b + c+ d === 0
  for (let i = 0; i < length - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue
    }
    if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > targets) {
      break
    }
    if (nums[i] + nums[length - 3] + nums[length - 2] + nums[length - 1] < targets) {
      continue
    }
    for (let j = i + 1; j < length - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) {
        continue
      }
      if (nums[i] + nums[j] + nums[j + 1] + nums[j + 2] > targets) {
        break
      }
      if (nums[i] + nums[j] + nums[length - 2] + nums[length - 1] < targets) {
        continue
      }
      const target = targets - (nums[i] + nums[j])
      let left = j + 1,
        right = length - 1
      // 双指针计算
      while (left < right) {
        if (nums[left] + nums[right] === target) {
          result.push([nums[i], nums[j], nums[left], nums[right]])
          while (left < right && nums[left] === nums[left + 1]) {
            left++
          }
          left++
          while (left < right && nums[right] === nums[right - 1]) {
            right--
          }
          right--
        } else if (nums[left] + nums[right] < target) {
          left++
        } else {
          right--
        }
      }
    }
  }
  return result
}
