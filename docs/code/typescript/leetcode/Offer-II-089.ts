/**
 * @title 剑指 Offer II 089. 房屋偷盗
 * @description 一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响小偷偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，
 * 如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。
 * 给定一个代表每个房屋存放金额的非负整数数组 nums ，请计算 不触动警报装置的情况下 ，一夜之内能够偷窃到的最高金额。
 * @tag 动态规划
 */
function rob(nums: number[]): number {
  const len = nums.length
  // dp[i] 表示当前金额的最大值
  const dp = [nums[0], Math.max(nums[0], nums[1])]
  if (len === 1 || len === 2) return dp[len - 1]
  for (let i = 2; i < len; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i])
  }
  return dp[dp.length - 1]
};