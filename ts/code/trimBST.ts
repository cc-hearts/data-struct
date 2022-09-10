/**
 * @author heart
 * @description
 * @Date 2022-09-10
 */
import { TreeNode } from '../utils/tree/class'

export function trimBST(root: TreeNode | null, low: number, high: number): TreeNode | null {
  if (root === null) return null
  // 从最底下开始遍历 如果需要删除该元素
  let header: TreeNode | null = root
  const dfs = (node: TreeNode | null, parentNode: TreeNode, type: 'left' | 'right'): TreeNode | null => {
    if (!node) return null
    const left = dfs(node.left, node, 'left')
    const right = dfs(node.right, node, 'right')
    if (node.val > high || node.val < low) {
      if (left) node = left
      else if (right) node = right
      else node = null
      parentNode[type] = node
    }
    return node
  }
  const left = dfs(header?.left, header, 'left')
  const right = dfs(header?.right, header, 'right')
  if (header.val > high || header.val < low) {
    if (left) header = left
    else if (right) header = right
    else header = null
  }
  return header
}
