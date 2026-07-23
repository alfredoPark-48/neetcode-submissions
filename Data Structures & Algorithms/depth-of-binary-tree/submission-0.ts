/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

const dfs = (root: TreeNode | null): number => {
    if (root === null) return 0;
    const leftDepth = dfs(root.left) + 1;
    const rightDepth = dfs(root.right) + 1;

    return Math.max(leftDepth, rightDepth);
}

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxDepth(root: TreeNode | null): number {
        return dfs(root);
    }
}
