//https://leetcode.com/problems/truncate-sentence/

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const truncateSentence = function (s, k) {
  return s.split(" ").slice(0, k).join(" ");
};

// const truncateSentence = (s, k) => s.split(' ', k).join(' ');

// ***** simplest approach ********
// var truncateSentence = function(s, k) {
//   let spaceCount=0;
//   for(let i=0; i<s.length; i++) {
//       if(s[i] === ' ' && ++spaceCount === k) return s.slice(0, i);
//   }
//   return s;
// };
