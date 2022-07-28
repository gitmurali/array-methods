// https://leetcode.com/problems/merge-strings-alternately/

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let i = 0;
  return Array.from(word1)
    .reduce((res, cv) => {
      res = [...res, cv, word2[i]];
      i++;
      return res;
    }, [])
    .join("")
    .concat(word2.slice(i));
};
