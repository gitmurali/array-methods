// https://leetcode.com/problems/count-asterisks/

/**
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function (s) {
  let green = true;
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (green && s[i] === "*") {
      count++;
    }
    if (s[i] === "|") {
      green = !green;
    }
  }

  return count;
};

// solution 2
/**
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function (s) {
  let asterisks = 0;
  s.split("|").forEach((sub, i) => {
    if (i % 2 === 0) {
      asterisks += sub.split("").filter((c) => c === "*").length;
    }
  });

  return asterisks;
};
