// https://leetcode.com/problems/satisfiability-of-equality-equations/
/**
 * @param {string[]} equations
 * @return {boolean}
 */
var equationsPossible = function (equations) {
  let parent = new Map();

  const find = (a) => {
    parent.set(a, parent.get(a) || a);
    return parent.get(a) === a ? a : find(parent.get(a));
  };

  equations.forEach(([a, s, , b]) => {
    if (s === "=") {
      const p1 = find(a);
      const p2 = find(b);
      parent.set(p1, p2);
    }
  });

  for (const [a, s, , b] of equations) {
    if (s === "!") {
      if (find(a) === find(b)) return false;
    }
  }

  return true;
};
