// https://leetcode.com/problems/longest-substring-without-repeating-characters/

var lengthOfLongestSubstring = function (s) {
  //     if(new Set(s).size === s.length) return s.length;
  //     const res=[];let tmp=[];let result=0;

  //     [...s].forEach(val => {
  //         if(!tmp.includes(val)) {
  //             tmp.push(val);
  //         } else {
  //             tmp=[val];
  //         }
  //         res.push(tmp);
  //     });

  //     for(let i=0; i<res.length; i++) {
  //         result = Math.max(result, res[i].length);
  //     }

  //     return result;
  // "abcabcbb"
  const map = {};
  let left = 0;
  return [...s].reduce((max, v, i) => {
    left = map[v] >= left ? map[v] + 1 : left;
    map[v] = i;
    return Math.max(max, i - left + 1);
  }, 0);
};
