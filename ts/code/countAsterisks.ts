function countAsterisks(s: string): number {
  let isOdd = false,
    preCount = 0,
    res = 0,
    l = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '*') {
      preCount++
    }
    if (s[i] === '|') {
      if (!isOdd) res += preCount
      preCount = 0
      isOdd = !isOdd
      l = i
    }
  }
  if (l < s.length - 1) {
    res += preCount
  }
  return res
}
