// https://leetcode.com/problems/greatest-english-letter-in-upper-and-lower-case/

/**
 * @param {string} s
 * @return {string}
 */
var greatestLetter = function (s) {
  let index = 0;
  [...s].forEach((val) => {
    const code = val.charCodeAt();
    if (code >= 97 && code <= 122) {
      const capital = String.fromCharCode(code - 32);
      if (s.includes(capital) && code > index) {
        index = code;
      }
    }
  });

  return index === 0 ? "" : String.fromCharCode(index - 32);
};

// solution 2 using set
var greatestLetter2 = function (s) {
  let set = new Set(s.split(""));
  for (let i = 90; i >= 65; i--) {
    if (
      set.has(String.fromCharCode(i)) &&
      set.has(String.fromCharCode(i + 32))
    ) {
      return String.fromCharCode(i);
    }
  }
  return "";
};
