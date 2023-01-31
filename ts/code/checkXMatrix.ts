function checkXMatrix(grid: number[][]): boolean {
  const len = grid.length - 1
  const set = new Set<string>()
  for (let i = 0; i < grid.length; i++) {
    set.add(`${i}-${i}`)
    set.add(`${len - i}-${i}`)
  }
  function isDiagonal(i: number, j: number) {
    return set.has(`${i}-${j}`)
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      const cur = grid[i][j]
      // if (isDiagonal(i, j)) {
      //   if (cur === 0) return false
      // } else {
      //   if (cur !== 0) return false
      // }
      // 优化写法 两个条件为真 或者两个条件为假的时候 直接比较两个条件的bool值
      if (isDiagonal(i, j) === (cur === 0)) return false
    }
  }
  return true
}
