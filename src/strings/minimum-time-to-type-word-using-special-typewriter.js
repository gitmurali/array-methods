// https://leetcode.com/problems/minimum-time-to-type-word-using-special-typewriter/

/**
 * @param {string} word
 * @return {number}
 */
var minTimeToType = function (word, cur = "a") {
  return [...word].reduce((res, cv) => {
    const gap = Math.abs(cur.charCodeAt(0) - cv.charCodeAt(0));
    cur = cv; // assign current value to cur
    return gap > 13 ? (res += 26 - gap) : (res += gap);
  }, word.length);
};
