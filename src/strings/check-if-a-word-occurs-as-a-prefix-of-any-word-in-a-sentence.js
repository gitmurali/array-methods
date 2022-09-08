// https://leetcode.com/problems/check-if-a-word-occurs-as-a-prefix-of-any-word-in-a-sentence/
/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function (sentence, searchWord) {
  let res = -1;
  const arr = sentence.split(" ");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].startsWith(searchWord)) {
      return i + 1;
    }
  }

  return res;
};
