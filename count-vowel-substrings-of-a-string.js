// https://leetcode.com/problems/count-vowel-substrings-of-a-string/

var isVowel = function (c) {
  return c === "a" || c === "e" || c === "i" || c === "o" || c === "u";
};

/**
 * @param {string} word
 * @return {number}
 */
var countVowelSubstrings = function (word) {
  const vowel = new Map();
  let total = 0;
  const totalLen = word.length - 1;

  for (let i = 0; i <= totalLen; i++) {
    vowel.clear();

    for (let j = i; j <= totalLen && isVowel(word[j]); j++) {
      vowel.set(word[j], vowel.get(word[j] ?? 0) + 1);
      if (vowel.size === 5) total++;
    }
  }

  return total;
};

// solution 2 using set
const countVowelSubstrings1 = (word) => {
  const vowels = new Set(["a", "e", "i", "o", "u"]);
  const set = new Set();
  let count = 0;

  for (let i = 0; i < word.length; i += 1) {
    set.clear();

    for (let j = 0; j + i < word.length && vowels.has(word[j + i]); j += 1) {
      set.add(word[i + j]);

      if (set.size === vowels.size) {
        count += 1;
      }
    }
  }

  return count;
};
