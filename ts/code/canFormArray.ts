/**
 * @author heart
 * @description
 * @Date 2022-09-22
 * @see https://leetcode.cn/problems/check-array-formation-through-concatenation/solution/
 */
function canFormArray(arr: number[], pieces: number[][]): boolean {
  for (let i = 0; i < arr.length; i++) {
    const index = pieces.findIndex((val) => val.includes(arr[i]))
    if (index === -1) return false
    const [list] = pieces.splice(index, 1)
    for (let j = 0; j < list.length; j++) {
      if (list[j] !== arr[i + j]) {
        return false
      }
    }
    i = i + list.length - 1
  }
  return true
}
