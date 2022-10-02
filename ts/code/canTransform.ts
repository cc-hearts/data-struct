/**
 * @author heart
 * @description
 * @Date 2022-10-02
 */
function canTransform(start: string, end: string): boolean {
  const n = start.length
  if (n !== end.length) return false
  let i = 0,
    j = 0
  while (i < n && j < n) {
    // 除去X的情况
    while (start[i] === 'X' && i < n) {
      i++
    }
    while (end[j] === 'X' && j < n) {
      j++
    }
    // 现在两个字母都不是X的情况
    // 两个字母的相对位置要一样
    if (start[i] !== end[j]) return false
    // 之后就是看两个字母的相对于x的位置
    // L向左移动 因此 start[i] === L 就需要 i >= j 这样L才能向左移动
    if (start[i] === 'L' && i < j) return false
    // R向右移动 因此 start[i] === R 就需要 i <= j 这样L才能向右移动
    if (start[i] === 'R' && i > j) return false
    i++
    j++
  }
  // 此时一定有一个已经遍历完成 但是需要保证去掉X之后 所有的字母相对位置要一致 因此
  while (i < n) {
    if (start[i] !== 'X') return false
    i++
  }
  while (j < n) {
    if (end[j] !== 'X') return false
    j++
  }
  return true
}
