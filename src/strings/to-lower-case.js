// https://leetcode.com/problems/to-lower-case/

var toLowerCase = function (str) {
  let lowerCase = "";

  for (let letter of str) {
    const index = letter.charCodeAt(0);
    if (index >= 65 && index <= 90) {
      letter = String.fromCharCode(index + 32);
    }
    lowerCase += letter;
  }

  return lowerCase;
};
