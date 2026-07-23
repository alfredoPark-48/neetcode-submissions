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

const dfs = (root: TreeNode | null) => {
    if (!root) return null;

    [root.left, root.right] = [root.right, root.left];
    
    dfs(root.left);
    dfs(root.right);
    return root;
}

class Solution {
    /**
     * @param {TreeNode} root
     * @return {TreeNode}
     */
    invertTree(root: TreeNode | null): TreeNode {
        return dfs(root);
    }
}
