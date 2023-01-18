// 1814
function countNicePairs(nums: number[]): number {
  function rev(n: number) {
    let ans = 0
    while (n > 0) {
      ans = ans * 10 + (n % 10)
      n = Math.floor(n / 10)
    }
    return ans
  }
  const MOD = 10 ** 9 + 7
  const map = new Map<number, number>()
  let ans = 0
  for (let i = 0; i < nums.length; i++) {
    const res = nums[i] - rev(nums[i])
    // 计算出结果 最后用value * (value - 1) % MOD 会超出
    ans = (ans + (map.get(res) || 0)) % MOD
    map.set(res, (map.get(res) || 0) + 1)
  }
  return ans
}

console.log(countNicePairs([1, 1, 1]))
