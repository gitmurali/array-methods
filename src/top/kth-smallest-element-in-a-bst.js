// https://leetcode.com/problems/kth-smallest-element-in-a-bst/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  let res;

  const traverse = (node) => {
    if (!node) return;
    traverse(node.left);
    if (--k === 0) res = node.val;
    traverse(node.right);
  };

  traverse(root);
  return res;
};
