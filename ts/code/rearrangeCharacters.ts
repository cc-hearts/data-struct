function rearrangeCharacters(s: string, target: string): number {
  const targetMap = new Map<string, number>()
  const map = new Map<string, number>()

  function addCharByMap(target: string, map: Map<string, number>) {
    for (let i = 0; i < target.length; i++) {
      const cur = target.charAt(i)
      if (map.has(cur)) {
        map.set(cur, map.get(cur)! + 1)
      } else {
        map.set(cur, 1)
      }
    }
  }

  addCharByMap(target, targetMap)
  addCharByMap(s, map)
  let list: number[] = []

  for (let [key, targetValue] of targetMap) {
    const value = map.get(key) || 0
    list.push(Math.floor(value / targetValue))
  }
  return Math.min(...list)
}
