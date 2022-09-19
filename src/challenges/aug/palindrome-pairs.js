// https://leetcode.com/problems/palindrome-pairs/

/**
 * @param {string[]} words
 * @return {number[][]}
 */
var palindromePairs = function (words) {
  let wmap = new Map(),
    ans = [];
  for (let i = 0; i < words.length; i++) wmap.set(words[i], i);

  for (let i = 0; i < words.length; i++) {
    if (words[i] === "") {
      for (let j = 0; j < words.length; j++) {
        if (j !== i && isPalindrome(words[j])) {
          ans.push([i, j], [j, i]);
        }
      }
      continue;
    }
    let bw = words[i].split("").reverse().join("");
    let res = wmap.get(bw);
    if (res !== undefined && res !== i) ans.push([i, res]);
    for (let j = 1; j < bw.length; j++) {
      if (isPalindrome(bw, 0, j - 1)) {
        let res = wmap.get(bw.slice(j));
        if (res !== undefined) ans.push([i, res]);
      }
      if (isPalindrome(bw, j)) {
        let res = wmap.get(bw.slice(0, j));
        if (res !== undefined) ans.push([res, i]);
      }
    }
  }

  return ans;
};

const isPalindrome = (word, i = 0, j = word.length - 1) => {
  while (i < j) if (word[i++] !== word[j--]) return false;

  return true;
};
