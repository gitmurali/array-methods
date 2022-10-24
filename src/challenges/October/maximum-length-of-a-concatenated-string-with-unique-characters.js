// https://leetcode.com/problems/maximum-length-of-a-concatenated-string-with-unique-characters/
/**
 * @param {string[]} arr
 * @return {number}
 */
var maxLength = function (arr) {
  let res = 0;

  const solve = (start, cur) => {
    if (cur.length !== new Set(cur).size) {
      return;
    }

    res = Math.max(res, cur.length);

    for (let i = start; i < arr.length; i++) {
      solve(i + 1, `${cur}${arr[i]}`);
    }
  };

  solve(0, "");

  return res;
};
