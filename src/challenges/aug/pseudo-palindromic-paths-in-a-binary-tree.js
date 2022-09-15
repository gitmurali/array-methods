// https://leetcode.com/problems/pseudo-palindromic-paths-in-a-binary-tree/

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
var pseudoPalindromicPaths = function (root) {
  let count = 0;
  const digits = Array(10).fill(true);

  const f = (node) => {
    if (!node) return;

    digits[node.val] = !digits[node.val];

    if (!node.left && !node.right) {
      if (digits.filter((val) => val === false).length <= 1) count += 1;
      digits[node.val] = !digits[node.val];
      return;
    }

    f(node.left);
    f(node.right);

    digits[node.val] = !digits[node.val];
  };

  f(root);
  return count;
};
