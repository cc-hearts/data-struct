/**
 * @author heart
 * @description
 * @Date 2022-09-27
 * @see https://leetcode.cn/problems/missing-two-lcci/
 */
function missingTwo(nums: number[]): number[] {
  const len = nums.length + 2 // 缺失了两个数
  let cur = Math.floor((len * (len + 1)) / 2) // 没有缺失的时候的数字的总合
  for (let i = 0; i < nums.length; i++) {
    cur -= nums[i]
  }
  // cur 此时就是两个缺失的数字的总合
  const num = cur
  //  x + y === cur  但是 数字不等 此时规定 x < y 的话 则一定有 x < Math.floor( cur / 2) y > Math.floor(cur / 2)
  // 从 1 - Math.floor( cur / 2) 下手 则一定会缺失一个数字 另外一个数字用 num - x 即可得到
  // 因为向下取整的原因 halfTotal也是可以取的
  const halfTotal = Math.floor(num / 2)
  cur = Math.floor((halfTotal * (halfTotal + 1)) / 2)
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= halfTotal) cur -= nums[i]
  }
  return [cur, num - cur]
}
