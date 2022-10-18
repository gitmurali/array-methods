// https://leetcode.com/problems/count-and-say/
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  let str = "1";
  for (let i = 1; i < n; i++) {
    let strArr = str.split("");
    str = "";
    let cnt = 1;
    for (let j = 0; j < strArr.length; j++) {
      if (strArr[j] !== strArr[j + 1]) {
        str += cnt + strArr[j];
        cnt = 1;
      } else {
        cnt++;
      }
    }
  }
  return str;
};
