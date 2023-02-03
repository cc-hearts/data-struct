/**
 * @author cc-heart
 * @description 1145. 二叉树着色游戏
 * @Date 2023-02-03
 */
class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

export function btreeGameWinningMove(root: TreeNode | null, n: number, x: number): boolean {
  // 最长的二叉树
  if (!root) return false
  let parentNode = null //
  const stack: TreeNode[] = []
  stack.push(root)

  const dfs = (node: TreeNode | null): number => {
    if (node === null) return 0
    const left = dfs(node.left)
    const right = dfs(node.right)
    return left + right + 1
  }

  while (stack.length > 0) {
    const node = stack.shift()!
    if (node.val === x) {
      parentNode = node
      break
    }
    if (node.left) stack.push(node.left)
    if (node.right) stack.push(node.right)
  }
  if (parentNode === root) {
    // 根节点的话 判断左右边的大小
    const left = dfs(root.left)
    const right = dfs(root.right)
    return Math.abs(left - right) > 1
  }
  const count = dfs(parentNode)
  // 当前节点的一半的值
  const c = (n - 1) >> 1
  if (count > c) {
    const left = dfs(parentNode?.left || null)
    const right = dfs(parentNode?.right || null)
    if (left > c || right > c) return true
  }
  return count < c + 1
}
