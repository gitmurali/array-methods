// https://leetcode.com/problems/leaf-similar-trees/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {
  const leaf1 = [];
  const leaf2 = [];

  function traverse(node, leaf) {
    if (!node) return;
    if (!node.left && !node.right) {
      leaf.push(node.val);
      return;
    }
    traverse(node.left, leaf);
    traverse(node.right, leaf);
  }

  traverse(root1, leaf1);
  traverse(root2, leaf2);

  return leaf1.join("-") === leaf2.join("-");
};
