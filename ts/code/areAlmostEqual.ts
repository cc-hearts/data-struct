/**
 * @author heart
 * @description
 * @Date 2022-10-11
 */
function areAlmostEqual(s1: string, s2: string): boolean {
  let i = 0
  const diffArray: Array<string[]> = []
  while (i < s1.length) {
    if (s1[i] !== s2[i]) {
      diffArray.push([s1[i], s2[i]])
    }
    if(diffArray.length > 2) {
      return false
    }
    i++
  }
  if (diffArray.length === 0) {
    return true
  }
  if (diffArray.length === 2 && diffArray[0][0] === diffArray[1][1] && diffArray[0][1] === diffArray[1][0]) {
    return true
  }
  return false
}
