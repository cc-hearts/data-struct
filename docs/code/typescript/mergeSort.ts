/**
 * 归并排序的实现
 * 归并排序是一个稳定的排序算法，在进行子数组合并的时候，我们可以设置当元素大小相等时
 * 不是一个原地排序算法 需要用到额外的空间
 */

function mergeArray(arr1: number[], arr2: number[]) {
  const arr = []
  let left = 0, // left 指向第一个数组的下标
    right = 0 // right 指向第二个数组的下标
  while (left < arr1.length && right < arr2.length) {
    if (arr1[left] < arr2[right]) {
      arr.push(arr1[left++])
    } else {
      arr.push(arr2[right++])
    }
  }
  while (left < arr1.length) {
    arr.push(arr1[left++])
  }
  while (right < arr2.length) {
    arr.push(arr2[right++])
  }
  return arr
}


function mergeSort(arr: number[], left = 0, right = arr.length - 1) {
  if (left >= right) {
    return [arr[left]]
  }
  // 找到中间下标的值
  const middleIndex = (left + right) >> 1

  // 进行递归处理
  const leftMergeArray = mergeSort(arr, left, middleIndex)
  const rightMergeArray = mergeSort(arr, middleIndex + 1, right)
  return mergeArray(leftMergeArray, rightMergeArray)
}


console.log(mergeSort([11, 8, 3, 5, 6, 1, 2, 3, 4]));
