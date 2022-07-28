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

// sol 2
const mergeAlternately1 = (a, b) => {
  const maxLength = Math.max(a.length, b.length);
  let result = "";

  for (let i = 0; i < maxLength; i++) {
    result += (a[i] ?? "") + (b[i] ?? "");
  }

  return result;
};
