/**
 * @author heart
 * @description
 * @Date 2022-09-23
 * @see https://leetcode.cn/problems/design-linked-list/
 */
class LinkNode {
  constructor(public val: number = 0, public next: LinkNode | null = null) {
    this.val = val
    this.next = next
  }
}
class MyLinkedList {
  constructor(public size: number = 0, public header: LinkNode = new LinkNode(0, null)) {
    this.size = size
    this.header = header
  }

  get(index: number): number {
    if (this.header === null) return -1
    let node: LinkNode | null = this.header.next
    while (index-- > 0) {
      if (node === null) break
      node = node.next
    }
    return node ? node.val : -1
  }

  addAtHead(val: number): void {
    this.addAtIndex(0, val)
  }
  addAtTail(val: number): void {
    this.addAtIndex(this.size, val)
  }
  addAtIndex(index: number, val: number): void {
    if (index > this.size) return
    let node: LinkNode | null = this.header
    while (index-- > 0) {
      if (node === null) break
      node = node.next
    }
    if (node) {
      const newNode = new LinkNode(val, node.next)
      node.next = newNode
      this.size++
    }
  }
  deleteAtIndex(index: number): void {
    if (index < 0 || index >= this.size) return
    let node: LinkNode | null = this.header
    while (index-- > 0) {
      if (node === null) break
      node = node.next
    }
    if (node) {
      const deleteNode = node.next
      const nextNode = deleteNode ? deleteNode.next : null
      node.next = nextNode
      deleteNode && (deleteNode.next = null)
      this.size--
    }
  }
}
