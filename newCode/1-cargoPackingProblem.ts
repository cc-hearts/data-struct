/**
 * 最少数量货物装箱
 * 有重量分别为 3，5，7 公斤的三种货物，和一个载重量为 X 公斤的箱子（不考虑体积等其它因素，只计算重量）
 * 需要向箱子内装满X公斤的货物，要求使用的货物个数尽可能少（三种货物数量无限）
 * 数据范围： 1<= x <=10000
 */


// 1. dfs 对 105 取余 之后 dfs 全遍历
let ans: number[]
function dfs(target: number, val: number, count: number) {
    if (target === val) {
        ans.push(count)
        return
    }
    const cur = target - val

    if (target >= 7) {
        dfs(cur, 7, count + 1)
    }

    if (target >= 5) {
        dfs(cur, 5, count + 1)
    }

    if (target >= 3) {
        dfs(cur, 3, count + 1)
    }
}

export function main(x: number) {
    ans = []
    const count = x % 105
    const num = Math.floor(x / 105)
    dfs(count, 7, 1)
    dfs(count, 5, 1)
    dfs(count, 3, 1)
    const val = Math.min(...ans)
    return val + num * 7
}


// 2. 一维dp
function dpMain(x: number) {
    // dp[i] 表示装栽i 的最小货物
    const dp = Array.from({ length: x + 1 }).map(() => Infinity)
    if (dp.length >= 3) {
        dp[3] = 1
    }
    if (dp.length >= 5) {
        dp[5] = 1
    }
    if (dp.length >= 6) {
        dp[6] = 2
    }
    if (dp.length >= 7) {
        dp[7] = 1
    }
    for (let i = 8; i <= x; i++) {
        const a = dp[i - 3], b = dp[i - 5], c = dp[i - 7]
        if (a === Infinity && b === Infinity && c === Infinity) {
            dp[i] = Infinity
        } else {
            dp[i] = Math.min(a, b, c) + 1
        }
    }
    if (dp[x] === Infinity) {
        return -1
    }
    return dp[x]
}

