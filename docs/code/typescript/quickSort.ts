/**
 * 快速排序
 */

function quickSort(arr: number[], left: number = 0, right: number = arr.length - 1) {
  // 取第一个值 作为参照对比 从最后开始遍历
  // 比这个值大的在右边 比这个值小的在左边
  if (left >= right) return
  const origin = arr[left]
  let l = left, r = right
  while (l < r) {
    while (l < r && arr[r] > origin) r--
    // 说明此时 arr[r] 小于等于了origin 需要重新填值
    if (l < r) {
      arr[l] = arr[r]
      l++ // 此时后续要从l的方向开始查找
    }
    while (l < r && arr[l] < origin) l++
    if (l < r) {
      arr[r] = arr[l]
      r--
    }
  }
  // 最后出来的结果是 l === r
  arr[l] = origin
  quickSort(arr, left, l - 1)
  quickSort(arr, r + 1, right)
}

const arr = [11, 8, 3, 5, 6, 1, 2, 3, 4]
quickSort(arr)
console.log(arr);
