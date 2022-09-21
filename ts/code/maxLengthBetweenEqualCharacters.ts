export function maxLengthBetweenEqualCharacters(s: string): number {
  if (s.length === 1) return 0
  let left = 0 // 初始值
  let ans = -1
  while (left < s.length) {
    for (let i = left + 1; i < s.length; i++) {
      if (s[left] === s[i]) {
        ans = Math.max(ans, i - left - 1)
      }
    }
    left++
  }
  return ans
}
