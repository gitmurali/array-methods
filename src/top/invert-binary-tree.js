// https://leetcode.com/problems/invert-binary-tree/
var invertTree = function (root) {
  if (!root) return null;
  [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];
  return root;
};
