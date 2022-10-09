// https://leetcode.com/problems/longest-common-prefix/
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (!strs) return "";

  return strs.reduce((res, cv) => {
    console.log(res, cv);
    let i = 0;
    while (res[i] && cv[i] && res[i] === cv[i]) i++;
    return cv.slice(0, i);
  });
};
