/**
 * Definition for singly-linked list.

 */
import { ListNode } from '../utils/tree/class'
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
