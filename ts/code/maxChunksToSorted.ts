function maxChunksToSorted(arr: number[]): number {
  let m = 0,
    count = 0
  for (let i = 0; i < arr.length; i++) {
    m = Math.max(m, arr[i])
    if (m === i) {
      count++
    }
  }
  return count
}

// console.log(maxChunksToSorted([2, 0, 1])) // 1
// console.log(maxChunksToSorted([1, 2, 0, 3])) // 2
// console.log(maxChunksToSorted([4, 3, 2, 1, 0])) // 1
// console.log(maxChunksToSorted([1, 0, 2, 3, 4])) // 4
// console.log(maxChunksToSorted([0, 1, 3, 5, 4, 2])) // 3
// console.log(maxChunksToSorted([0, 2, 1, 4, 3])) // 3
// console.log(maxChunksToSorted([1, 0, 2, 4, 3])) // 3
// console.log(maxChunksToSorted([2, 6, 1, 3, 0, 5, 4])) // 1
