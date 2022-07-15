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

// solution 2
const prefixCount = (words, pref) => {
  let count = 0;
  for (const word of words) {
    word.startsWith(pref) && ++count;
  }
  return count;
};

//solution 3
const prefixCount = (words, pref) =>
  words.filter((word) => word.startsWith(pref)).length;
