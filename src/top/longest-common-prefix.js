// https://leetcode.com/problems/longest-common-prefix/submissions/
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (!strs) return "";
  return strs.reduce((res, cv) => {
    let i = 0;
    while (res[i] && cv[i] && res[i] === cv[i]) i++;
    return res.slice(0, i);
  });
};
