// https://leetcode.com/problems/string-matching-in-an-array/
/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function (words) {
  const res = [];
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words.length; j++) {
      if (words[i] !== words[j] && words[i].includes(words[j])) {
        if (!res.includes(words[j])) res.push(words[j]);
      }
    }
  }
  return res;
};

// solution 2
var stringMatching = function (words) {
  return words.filter((word) =>
    words.some((newWord) => word !== newWord && newWord.includes(word))
  );
};
