// https://leetcode.com/problems/count-items-matching-a-rule/
/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function (items, ruleKey, ruleValue) {
  const map = {
    type: 0,
    color: 1,
    name: 2
  };
  let count = 0;
  items.forEach((elm) => {
    elm.forEach((item, idx) => {
      if (map[ruleKey] === idx && ruleValue === item) {
        count++;
      }
    });
  });
  return count;
};

// solution #2
// var countMatches = function(items, ruleKey, ruleValue) {
//   const map = {
//       type: 0,
//       color: 1,
//       name: 2
//   };
//   return items.reduce((acc, item, idx) => item[map[ruleKey]] === ruleValue ? acc+1 : acc, 0);
// };

//solution #3
// const countMatches = (items, key, value) => items.filter(i => i[map[key]] == value).length
