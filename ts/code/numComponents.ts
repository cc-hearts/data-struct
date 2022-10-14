/**
 * Definition for singly-linked list.

 */
import { ListNode } from '../utils/tree/class'
// class TrieNode {
//   constructor(public val: number, public next: TrieNode[] | null) {}
// }

// function numComponents(head: ListNode | null, nums: number[]): number {
  // 线段树
  // 现将 nums转化为线段树 每个层级节点不超过1 空间占用太大
//   nums.sort((a, b) => a - b)

//   let trieHeader = new TrieNode(-1, null)
//   let i = 0
//   trieHeader.next = []
//   let node: TrieNode = trieHeader
//   while (i < nums.length) {
//     if (node.next === null) {
//       node.next = []
//     }
//     if (node.next.length === 0) {
//       node.next.push(new TrieNode(nums[i], null))
//     } else {
//       const [data] = node.next.slice(-1)
//       if (nums[i] - data.val > 1) {
//         node.next.push(new TrieNode(nums[i], null))
//         i++
//         continue
//       }
//       node = data
//       let flag = false
//       while (nums[i] - node.val === 1) {
//         node.next === null && (node.next = [])
//         const newTrie = new TrieNode(nums[i], null)
//         node.next.push(newTrie)
//         node = newTrie
//         flag = true
//         i++
//       }
//       flag && i--
//       node = trieHeader
//     }
//     i++
//   }
//   let temp = head
//   while (temp !== null) {
//     temp = temp.next
//   }
// }
function numComponents(head: ListNode | null, nums: number[]): number {
  const set = new Set<number>()
  for (let i = 0; i < nums.length; i++) {
    set.add(nums[i])
  }
  let node = head,
    result = 0
  while (node !== null) {
    const data = node.val
    if (set.has(data)) {
      while (node !== null && set.has(node.val)) {
        node = node.next
      }
      result++
    } else {
      node = node.next
    }
  }
  return result
}
