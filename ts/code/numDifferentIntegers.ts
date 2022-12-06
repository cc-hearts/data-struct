export function numDifferentIntegers(word: string): number {
  const set = new Set<string>()
  let left = -1
  function getWords(left: number, right: number) {
    let ans = ''
    if (right - left > 0) {
      let isHaveZero = false
      while (word.charCodeAt(left + 1) === 48) {
        left++
        isHaveZero = true
      }
      if (left + 1 >= right && isHaveZero) {
        ans = '0'
      } else {
        ans = word.substring(left + 1, right)
      }
    }
    return ans
  }
  for (let i = 0; i < word.length; i++) {
    const char = word.charCodeAt(i)
    if (char >= 48 && char <= 57) {
      continue
    }
    const ans = getWords(left, i)
    if (ans) set.add(ans)
    left = i
  }
  const ans = getWords(left, word.length)
  if (ans) set.add(ans)
  return set.size
}
