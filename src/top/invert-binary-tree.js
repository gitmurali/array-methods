// https://leetcode.com/problems/invert-binary-tree/
var invertTree = function (root) {
  if (!root) return null;
  [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];
  return root;
};

var invertTree = function (root) {
  const stack = [root];
  while (stack.length) {
    const node = stack.pop();
    if (node !== null) {
      [node.left, node.right] = [node.right, node.left];
      stack.push(node.left, node.right);
    }
  }
  return root;
};
