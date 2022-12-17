export function canChoose(groups: number[][], nums: number[]): boolean {
  let right = 0,
    flag = 0

  for (let i = 0; i < nums.length; i++) {
    const arr = groups[flag]
    if (nums[i] === arr[right]) {
      right++
      while (right < arr.length && nums[i + right] === arr[right]) {
        right++
      }
      if (right === arr.length) {
        flag++
        if (flag === groups.length) {
          return true
        }
        i = i + right - 1
      }
    }
    right = 0
  }
  return false
}

