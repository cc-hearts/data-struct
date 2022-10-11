function findContentChildren(g: number[], s: number[]): number {
  let left = 0,
    right = 0,
    count = 0
  g.sort((a, b) => a - b)
  s.sort((a, b) => a - b)
  while (right < s.length) {
    if (s[right] >= g[left]) {
      count++
      left++
    }
    right++
  }
  return count
}
