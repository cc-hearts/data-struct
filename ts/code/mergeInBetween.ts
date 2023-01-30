export class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

export function mergeInBetween(list1: ListNode | null, a: number, b: number, list2: ListNode | null): ListNode | null {
  let nodeList = list1,
    count = 0,
    preNode = null,
    suffixNode = null
  while (nodeList && nodeList.next) {
    if (count === a - 1) {
      preNode = nodeList
    }
    if (count === b) {
      suffixNode = nodeList.next
    }
    nodeList = nodeList.next
    count++
  }
  if (preNode) {
    preNode.next = list2
  }
  nodeList = list2
  while (nodeList && nodeList.next) {
    nodeList = nodeList.next
  }
  nodeList && (nodeList.next = suffixNode)
  return list1
}
