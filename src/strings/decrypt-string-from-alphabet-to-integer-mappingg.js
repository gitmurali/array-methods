// https://leetcode.com/problems/decrypt-string-from-alphabet-to-integer-mapping/

/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function (s) {
  let result = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i + 2] === "#") {
      result += String.fromCharCode(96 + Number(s[i] + s[i + 1]));
      i++;
    } else if (s[i] !== "#") {
      result += String.fromCharCode(96 + Number(s[i]));
    }
  }

  return result;
};

// sol 2
var freqAlphabets = function (s) {
  const map = {
    "1": "a",
    "2": "b",
    "3": "c",
    "4": "d",
    "5": "e",
    "6": "f",
    "7": "g",
    "8": "h",
    "9": "i",
    "10": "j",
    "11": "k",
    "12": "l",
    "13": "m",
    "14": "n",
    "15": "o",
    "16": "p",
    "17": "q",
    "18": "r",
    "19": "s",
    "20": "t",
    "21": "u",
    "22": "v",
    "23": "w",
    "24": "x",
    "25": "y",
    "26": "z"
  };
  return s.replace(/\d\d#|\d/g, (t) =>
    t.length === 3 ? map[t[0] + t[1]] : map[t]
  );
};
