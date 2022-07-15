//2185. Counting Words With a Given Prefix

/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function (words, pref) {
  let len = pref.length;
  return words.reduce((res, cv) => {
    if (cv.substring(0, len) === pref) res++;
    return res;
  }, 0);
};
