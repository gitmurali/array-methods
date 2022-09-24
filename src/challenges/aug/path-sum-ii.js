// https://leetcode.com/problems/path-sum-ii/

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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
  if (!root) return [];
  const res = [];
  const visited = [];

  function traverse(node) {
    visited.push(node.val);

    if (!node.left && !node.right) {
      const sum = visited.reduce((res, cv) => {
        return res + cv;
      }, 0);

      if (sum === targetSum) {
        res.push([...visited]);
      }
    }
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);

    visited.pop();
  }

  traverse(root);
  return res;
};
