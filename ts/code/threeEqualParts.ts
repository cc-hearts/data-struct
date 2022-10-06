/**
 * @author heart
 * @description
 * @Date 2022-10-06
 */
function threeEqualParts(arr: number[]): number[] {
  const falsy = [-1, -1]
  let oneTotal = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) oneTotal++
  }
  if (oneTotal === 0) return [0, 2]
  if (oneTotal < 3 || oneTotal % 3 !== 0) return falsy
  const partCount = oneTotal / 3
  // 之后判断3的个数并且后置0也需要一样
  const prefixZornIndex = [-1, -1, -1] // 记录 三次切割的时候中间值的0有多少个
  const result: Array<number[]> = []
  let c = 0,
    preIndex = 0,
    zeroIndex = 0,
    zeroFlag = false,
    length = arr.length,
    first = -1
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      c++
      zeroFlag && (prefixZornIndex[zeroIndex++] = i - preIndex)
      zeroFlag = false
      c === 1 && (preIndex = i)
    }
    // 切割字符
    if (c === partCount) {
      console.log(preIndex, i + 1)
      c = 0
      result.push(arr.slice(preIndex, i + 1))
      preIndex = i + 1
      first === -1 && (first = i + 1)
      // 计算后置0的个数
      zeroFlag = true
    }
  }
  zeroFlag && (prefixZornIndex[zeroIndex++] = length < preIndex ? 0 : length - preIndex)
  for (let i = 0; i < prefixZornIndex.length - 1; i++) {
    if (prefixZornIndex[2] > prefixZornIndex[i]) return falsy
  }

  length = result[0].length
  let tempArr = result[0]
  for (let i = 1; i < result.length; i++) {
    for (let j = 0; j < result[i].length; j++) {
      // 是否三个数组全等
      if (tempArr[j] !== result[i][j] || result[i].length !== length) return falsy
    }
  }
  // 根据最后的0进行切割
  length = prefixZornIndex[prefixZornIndex.length - 1]
  const ans: [number, number] = [0, 0]
  ans[0] = first + length - 1 // 字符串切割的下标
  ans[1] = first + prefixZornIndex[0] + result[1].length + length
  return ans
}
// console.log(threeEqualParts([1, 0, 1, 1, 0]))
// console.log(threeEqualParts([1, 1, 0, 1, 1]))
// console.log(threeEqualParts([1, 0, 1, 0, 1]))
// console.log(threeEqualParts([0, 1, 0, 1, 1]))
// console.log(threeEqualParts([0, 0, 0, 0, 0]))
// console.log(threeEqualParts([1, 1, 1, 1, 1, 1, 0, 1, 1, 1]))
// console.log(threeEqualParts([0, 1, 0, 1, 1, 0, 1, 1, 0, 1])) // 3,7
