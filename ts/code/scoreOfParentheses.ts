/**
 * @author heart
 * @description
 * @Date 2022-10-09
 */
// s 是平衡字符串 所以 括号的个数总会是相等的
function scoreOfParentheses(s: string): number {
  let count = 0,
    result = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      count++
    } else {
      result += 2 ** (count - 1)
      // 因为使用了++i 避免了下一次的'('的 这个的新增
      // while(s[++i] ===')')
      // count--
      // 否则使用i++的方案:
      while (s[i] === ')') {
        count--
        i++
      }
      if(s[i] === '(') {
        i--
      }
    }
  }
  return result
}
// console.log(scoreOfParentheses('()'))
// console.log(scoreOfParentheses('((()))'))
// console.log(scoreOfParentheses('()()'))
// console.log(scoreOfParentheses('(()(()()))'))
