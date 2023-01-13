// 2283
function digitCount(num: string): boolean {
  const map = new Map<number, number>()

  for (let i = 0; i < num.length; i++) {
    const cur = Number(num.charAt(i))
    if (map.has(cur)) {
      map.set(cur, map.get(cur)! + 1)
    } else {
      map.set(cur, 1)
    }
  }

  for (let i = 0; i < num.length; i++) {
    const val = map.get(i) || 0
    const cur = Number(num.charAt(i))
    if (val !== cur) return false
  }
  return true
}
digitCount('1210')