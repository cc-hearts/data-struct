// 2293
function minMaxGame(nums: number[]): number {
  function dfs(arr: number[]): number {
    if (arr.length === 1) return arr[0]
    const newArr: number[] = Array.from({ length: arr.length / 2 })
    let isOdd = false
    for (let i = 0; i < newArr.length; i++) {
      if (isOdd) {
        newArr[i] = Math.max(arr[2 * i], arr[2 * i + 1])
      } else {
        newArr[i] = Math.min(arr[2 * i], arr[2 * i + 1])
      }
      isOdd = !isOdd
    }
    return dfs(newArr)
  }
  return dfs(nums)
}
