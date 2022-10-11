function wiggleMaxLength(nums: number[]): number {
  if (nums.length === 1) return 1
  let preIsThanZero = nums[1] - nums[0]
  let result = preIsThanZero === 0 ? 1 : 2
  for (let i = 2; i < nums.length; i++) {
    const cur = nums[i] - nums[i - 1]
    if (cur > 0 && preIsThanZero < 0) {
      result++
      preIsThanZero = 1
    } else if (cur < 0 && preIsThanZero > 0) {
      result++
      preIsThanZero = -1
    } else if (preIsThanZero === 0 && cur !== 0) {
      result++
      preIsThanZero = cur
    }
  }
  return result
}

// console.log(wiggleMaxLength([1, 2, 3, 4, 5, 6, 7, 8, 9]))
console.log(wiggleMaxLength([1, 17, 5, 10, 13, 15, 10, 5, 16, 8]))
console.log(wiggleMaxLength([1, 7, 4, 9, 2, 5]))
console.log(wiggleMaxLength([0, 1, 0, 1, 0, 0]))
