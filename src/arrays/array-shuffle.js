/**
1470. Shuffle the Array
https://leetcode.com/problems/shuffle-the-array/
 */
/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
  // let res=[]
  // for(let i=0; i<n; i++) {
  //     res.push(nums[i], nums[i+n]);
  // }
  // return res

  let isEvenIndex = true;
  let res = [];
  for (let i = 0; i < n; i++) {
    if (isEvenIndex) {
      res.push(nums[i]);
      i--;
    } else {
      res.push(nums[i + n]);
    }

    isEvenIndex = !isEvenIndex;
  }

  return res;
};
