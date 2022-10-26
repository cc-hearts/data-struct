function partitionDisjoint(nums: number[]): number {
  const temp: number[] = []
  for (let i = nums.length - 1; i >= 0; i--) {
    if (i + 1 == nums.length) {
      temp[i] = nums[i]
      continue
    }
    temp[i] = Math.min(temp[i + 1], nums[i])
  }
  let max = nums[0],
    count = 0
  for (let i = 0; i < nums.length; i++) {
    if (max <= temp[i]) break
    count++
    max = Math.max(max, nums[i])
  }
  return count || 1
}

console.log(partitionDisjoint([1, 1]))
console.log(partitionDisjoint([5, 0, 3, 3, 8, 6]))
console.log(partitionDisjoint([32, 57, 24, 19, 0, 24, 49, 67, 87, 87]))
