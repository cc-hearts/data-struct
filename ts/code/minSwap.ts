/**
 * @author heart
 * @Date 2022-10-10
 * @types: 动态规划 dp状态机
 * @description 由于答案一定存在 因此一定有 nums1[i] > nums1[i - 1] || nums1[i] > nums2[i - 1]
 */
//
function minSwap(nums1: number[], nums2: number[]): number {
  const n = nums1.length
  // 状态DP
  const dp = Array.from<Array<number>>({ length: n }).map(() => [n + 10, n + 10])
  dp[0][0] = 0
  dp[0][1] = 1
  for (let i = 1; i < nums1.length; i++) {
    if (nums1[i] > nums1[i - 1] && nums2[i] > nums2[i - 1]) {
      dp[i][0] = dp[i - 1][0]
      dp[i][1] = dp[i - 1][1] + 1
    }
     if (nums1[i] > nums2[i - 1] && nums2[i] > nums1[i - 1]) {
      // 两个交换其中一个即可
      dp[i][0] = Math.min(dp[i][0], dp[i - 1][1])
      dp[i][1] = Math.min(dp[i][1], dp[i - 1][0] + 1)
    }
  }
  return Math.min(dp[n - 1][0], dp[n - 1][1])
}
// console.log(minSwap([1,3,5,4],[1,2,3,7]))
// console.log(minSwap([0, 3, 5, 8, 9], [2, 1, 4, 6, 9]))
// console.log(minSwap([0, 4, 4, 5, 9], [0, 1, 6, 8, 10]))
