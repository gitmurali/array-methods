// https://leetcode.com/problems/sorting-the-sentence/

/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function (s) {
  return s
    .split(" ")
    .reduce((res, cv) => {
      res[+cv[cv.length - 1] - 1] = cv.slice(0, cv.length - 1);
      return res;
    }, [])
    .join(" ");
};
