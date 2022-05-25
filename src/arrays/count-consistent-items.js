// https://leetcode.com/problems/count-the-number-of-consistent-strings/

/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
const countConsistentStrings = function (allowed, words) {
  const set = new Set(allowed);
  return words.reduce((acc, cv) => {
    return cv.split("").every((val) => set.has(val)) ? ++acc : acc;
  }, 0);
};
