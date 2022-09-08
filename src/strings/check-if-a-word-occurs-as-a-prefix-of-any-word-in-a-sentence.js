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
    if (arr[i].slice(0, searchWord.length) === searchWord) {
      return i + 1;
    }
  }

  return res;
};

//solution 2
function isPrefixOfWord1(sentence, searchWord) {
  return (
    sentence.split(" ").findIndex((e) => e.startsWith(searchWord)) + 1 || -1
  );
}
