/**
 * @author heart
 * @description
 * @Date 2022-10-01
 */
function reformatNumber(number: string): string {
  let digit = ''
  for (let i = 0; i < number.length; i++) {
    if (/[0-9]/.test(number[i])) {
      digit += number[i]
    }
  }
  // 分组
  let i = 0,
    result = '',
    r = 0
  while (i < digit.length) {
    r = i + 2
    if (r >= digit.length) {
      r = digit.length - 1
    } else if (digit.length - 1 - r == 1) {
      r--
    }
    for (let k = i; k <= r; k++) {
      result += digit[k]
    }
    i = r + 1
    if (digit.length !== i) result += '-'
  }
  return result
}

export default reformatNumber
