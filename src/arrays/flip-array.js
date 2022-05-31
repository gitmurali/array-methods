//https://leetcode.com/problems/flipping-an-image/

/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function (image) {
  return image.map((img) => img.reverse().map((elm) => 1 - elm));
};
