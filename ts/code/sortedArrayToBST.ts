/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
import { TreeNode } from '../utils/tree/class'
// 通过中序遍历恢复二叉搜索树
// 二叉搜索树的中序遍历是递升的
// 按照分治 的方式 逐次生成搜索树
export function sortedArrayToBST(nums: number[]): TreeNode | null {
  const dfs = (left: number, right: number) => {
    if (left > right) return null
    const middle = left + ~~((right - left) >> 1)
    const node = new TreeNode(nums[middle])
    node.left = dfs(left, middle - 1)
    node.right = dfs(middle + 1, right)
    return node
  }
  return dfs(0, nums.length - 1)
}
