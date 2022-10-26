/**
 * @author heart
 * @description
 * @Date 2022-10-15
 */
function buildArray(target: number[], n: number): string[] {
  let i = 0,
    cur = 1,
    result: string[] = []
  while (i < target.length && cur <= n) {
    while (cur !== target[i] && cur <= n) {
      result.push('Push')
      cur++
      result.push('Pop')
    }
    result.push('Push')
    cur++
    i++
  }
  return result
}

// console.log(buildArray([1, 3], 3))
// console.log(buildArray([1, 2], 4))
// console.log(buildArray([1, 2, 3], 3))
