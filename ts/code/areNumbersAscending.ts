/**
 * @author cc-heart
 * @description 检查句子中的数字是否递增
 * @Number 2042
 * @see https://leetcode.cn/problems/check-if-numbers-are-ascending-in-a-sentence/description/
 * @Date 2023-01-03
 */
function areNumbersAscending(s: string): boolean {
  let left = 0
  const arr: number[] = []
  function isNaNAndPushArr(str: string, arr: number[]) {
    const num = Number(str)
    if (!Number.isNaN(num)) {
      arr.push(num)
    }
  }
  for (let i = 0; i < s.length; i++) {
    const cur = s[i]
    if (cur === ' ') {
      const str = s.substring(left, i)
      isNaNAndPushArr(str, arr)
      left = i
    }
  }
  const str = s.substring(left, s.length)
  isNaNAndPushArr(str, arr)
  const newArr = [...new Set(arr)].sort((a, b) => a - b)
  if (newArr.length !== arr.length) return false
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] !== arr[i]) {
      return false
    }
  }
  return true
}