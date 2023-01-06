/**
 * @author cc-heart
 * @number 2180
 * @see https://leetcode.cn/problems/count-integers-with-even-digit-sum/description/
 * @Date 2023-01-06
 */
function digitTotal(num: number) {
  let ans = 0
  while (num !== 0) {
    ans += num % 10
    num = Math.floor(num / 10)
  }
  return ans
}
function countEven(num: number): number {
  let ans = 0
  for (let i = 1; i <= num; i++) {
    if ((digitTotal(i) & 1) === 0) {
      ans++
    }
  }
  return ans
}

countEven(30)
