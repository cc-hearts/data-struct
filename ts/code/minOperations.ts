/**
 * @author heart
 * @description
 * @Date 2022-09-09
 */
export function minOperations(logs: string[]): number {
  let stack: number = 0
  for (let i = 0; i < logs.length; i++) {
    if (logs[i] === './') continue
    else if (logs[i] === '../') {
      stack--
      stack < 0 ? (stack = 0) : ''
    } else stack++
  }
  return stack
}
