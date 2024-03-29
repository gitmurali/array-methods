// https://leetcode.com/problems/palindrome-partitioning/
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  function isPalindrome(str) {
    let left = 0,
      right = str.length - 1;

    while (left < right) {
      if (str[left] !== str[right]) return false;
      left++;
      right--;
    }
    return true;
  }

  const results = [];

  function permutate(arr, str) {
    if (!str.length) results.push(arr);

    for (let i = 1; i <= str.length; i++) {
      const subStr = str.slice(0, i);
      if (isPalindrome(subStr)) {
        permutate([...arr, subStr], str.slice(i));
      }
    }
  }

  permutate([], s);

  return results;
};
