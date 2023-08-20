function maxAbsoluteSum(nums: number[]): number {
    const arr = []
    for (let i = 0; i < nums.length; i++) {
        arr[i] = []
    }
    let ans = nums[0]
    arr[0][0] = Math.max(nums[0], 0)
    arr[0][1] = Math.min(nums[0], 0)
    for (let i = 1; i < nums.length; i++) {
        // 如果前面的值小于了 0 。舍去
        arr[i][0] = Math.max(arr[i - 1][0], 0) + nums[i]
        arr[i][1] = Math.min(arr[i - 1][1], 0) + nums[i]
        ans = Math.max(ans, arr[i][0], -arr[i][1])
    }
    return ans
};