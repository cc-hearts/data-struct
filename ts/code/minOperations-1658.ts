export function minOperations(nums: number[], x: number): number {
    let left = 0, total = 0, cur = 0, maxLength = -1
    for (let i = 0; i < nums.length; i++) {
        total += nums[i]
    }
    if (total === x) {
        return nums.length
    }
    if (total < x) {
        return -1
    }
    for (let i = 0; i < nums.length; i++) {
        cur += nums[i]

        if (total - cur < x) {
            while (total - cur < x && left < i) {
                cur -= nums[left]
                left++
            }
            if (total - cur === x) {
                maxLength = Math.max(maxLength, i - left + 1)
            }
        } else if (total - cur === x) {
            maxLength = Math.max(maxLength, i - left + 1)
        }
    }
    return maxLength === -1 ? maxLength : nums.length - maxLength
};