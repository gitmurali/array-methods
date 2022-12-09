// https://leetcode.com/problems/maximum-difference-between-node-and-ancestor/description/
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
 * @return {number}
 */
var maxAncestorDiff = function (root) {
  let result = 0;

  function traverse(node, max, min) {
    if (!node) {
      result = Math.max(result, max - min);
      return;
    }

    max = Math.max(max, node.val);
    min = Math.min(min, node.val);

    traverse(node.left, max, min);
    traverse(node.right, max, min);
  }

  traverse(root, root.val, root.val);

  return result;
};
