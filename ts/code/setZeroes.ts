/**
 * @author heart
 * @description
 * @Date 2022-09-30
 * @see https://leetcode.cn/problems/zero-matrix-lcci/
 */
function setZeroes(matrix: number[][]): void {
  // 克隆matrix 的行和列
  // const deepArray: number[][] = Array.from<number[]>({ length: matrix.length }).fill(Array.from<number>({ length: matrix[0].length }).fill(0))
  const row = new Set<number>()
  const col = new Set<number>()
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      // 当前元素被重置为0
      if (matrix[i][j] === 0) {
        row.add(i)
        col.add(j)
      }
    }
  }
  for (const r of row) {
    for (let i = 0; i < matrix[r].length; i++) {
      matrix[r][i] = 0
    }
  }
  for (const c of col) {
    for (let i = 0; i < matrix.length; i++) {
      matrix[i][c] = 0
    }
  }
}
