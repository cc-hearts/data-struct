export class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === void 0 ? 0 : val
    this.left = left === void 0 ? null : left
    this.right = right === void 0 ? null : right
  }
}

export class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === void 0 ? 0 : val
    this.next = next === void 0 ? null : next
  }
}
// 根据数组生成树节点
export function generatorTree(list: (number | null)[]) {
  const queue: TreeNode[] = []
  if (list.length === 0) return null
  const argList = [...list]
  const head = new TreeNode(argList.shift()!, null, null)
  queue.push(head)
  function generatorTreeNode(val: number | null | undefined): null | TreeNode {
    const nodeVal = val ?? null
    return nodeVal === null ? null : new TreeNode(nodeVal, null, null)
  }
  while (argList.length > 0 && queue.length > 0) {
    const node = queue.shift()!
    node.left = generatorTreeNode(argList.shift())
    if (node.left) queue.push(node.left)
    node.right = generatorTreeNode(argList.shift())
    if (node.right) queue.push(node.right)
  }
  return head
}
