// https://leetcode.com/problems/long-pressed-name/

/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function (name, typed) {
  for (var i = 0, j = 0; i < typed.length && j <= name.length; i++) {
    console.log(i, j);
    if (typed[i] === name[j]) j++;
    else if (typed[i] !== name[j - 1]) return false;
  }
  return i === typed.length && j === name.length;
};
