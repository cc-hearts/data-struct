/**
 * @author heart
 * @description
 * @Date 2022-09-28
 */
function swap(array: number[], preIndex: number, nextIndex: number) {
  if (preIndex === nextIndex) return
  ;[array[preIndex], array[nextIndex]] = [array[nextIndex], array[preIndex]]
}
// 调整堆排序的大小 小根堆
function heapInsert(array: number[]) {
  if (array.length === 1) {
    return
  }
  let curIndex = array.length - 1,
    parentIndex = Math.floor((curIndex - 1) / 2)
  while (array[curIndex] < array[parentIndex] && parentIndex >= 0) {
    swap(array, parentIndex, curIndex)
    curIndex = parentIndex
    parentIndex = Math.floor((curIndex - 1) / 2)
  }
}
// 弹出元素
function heapify(array: number[], heapSize: number = array.length - 1) {
  // 交换顶层元素和尾元素的值
  if (array.length <= 1) return array[0]
  let index = 0,
    left = 2 * index + 1
  while (left <= heapSize) {
    // 确定是否有右边节点
    // 找出更小的节点
    const smallerIndex = left + 1 > heapSize || array[left] < array[left + 1] ? left : left + 1
    if (array[smallerIndex] >= array[index]) return
    swap(array, smallerIndex, index)
    index = smallerIndex
    left = 2 * index + 1
  }
}

// 第 k 个数
function getKthMagicNumber(k: number): number {
  const heap: number[] = [1] // 堆
  const set = new Set<number>() // 过滤重复数据
  const factory = [3, 5, 7]
  let i = 0
  let ans = 0
  while (i <= k) {
    swap(heap, 0, heap.length - 1)
    const d = heap.pop()!
    heapify(heap)
    i++
    if (i === k) {
      ans = d
      break
    }
    factory.forEach((val) => {
      const value = val * d
      if (!set.has(value)) {
        heap.push(value)
        set.add(value)
        heapInsert(heap)
      }
    })
  }
  return ans
}
