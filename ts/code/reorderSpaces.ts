/**
 * @author heart
 * @description
 * @Date 2022-09-07
 */

export function reorderSpaces(text: string): string {
  let startIndex = -1,
    count = 0
  const list: string[] = []
  for (let i = 0; i < text.length; i++) {
    const element = text[i]
    if (element === ' ') {
      if (i > 0 && startIndex !== -1) {
        list.push(text.slice(startIndex, i))
        startIndex = -1
      }
      count++
    } else {
      if (startIndex === -1) {
        startIndex = i
      }
      if (i === text.length - 1) {
        //  最后一个了
        list.push(text.slice(startIndex, i + 1))
      }
    }
  }

  // 切割字符串
  // 对于list === 1的情况判断
  const spaceLength = (count / (list.length - 1)) >>> 0
  const endLength = list.length - 1 === 0 ? count : count % (list.length - 1)
  let space = ''
  for (let i = 0; i < spaceLength; i++) {
    space += ' '
  }
  let endSpace = ''
  for (let i = 0; i < endLength; i++) {
    endSpace += ' '
  }

  let ans = ''
  for (let i = 0; i < list.length; i++) {
    ans += list[i] + (i === list.length - 1 ? '' : space)
  }
  return ans + endSpace
}
