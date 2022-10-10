// https://leetcode.com/problems/two-sum-iv-input-is-a-bst/
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
 * @return {boolean}
 */
var findTarget = function (root, k) {
  if (!root) return null;
  const set = new Set();
  const stack = [root];
  while (stack.length) {
    const node = stack.pop();
    if (set.has(k - node.val)) return true;
    set.add(node.val);
    if (node.left) stack.push(node.left);
    if (node.right) stack.push(node.right);
  }
  return false;
};

// solution 2
var findTarget1 = function (root, k) {
  const set = new Set();

  function traverse(node) {
    if (!node) return false;
    if (set.has(k - node.val)) {
      return true;
    }
    set.add(node.val);
    return traverse(node.left) || traverse(node.right);
  }

  return traverse(root);
};
