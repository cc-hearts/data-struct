/**
 * @author heart
 * @description 模拟构造题
 * @Date 2022-10-31
 * @see https://leetcode.cn/problems/magical-string/description/
 */
function magicalString(n: number): number {
  let cur = 1,
    left = 0
  const array: number[] = []
  array.push(1)
  for (let i = 0; i < n; i++) {
    cur ^= 3
    array.push(cur)
    left++
    if (array[left] === 2) array.push(cur)
  }
  let ans = 0
  for (let i = 0; i < n; i++) {
    if (array[i] === 1) ans++
  }
  return ans
}