// https://leetcode.com/problems/partition-labels/
/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
  const res = [];
  let last = -1;
  let left = 0;
  for (let i = 0; i < s.length; i++) {
    last = Math.max(last, s.lastIndexOf(s[i]));
    if (i === last) {
      res.push(i - left + 1);
      left = i + 1;
    }
  }
  return res;
};
