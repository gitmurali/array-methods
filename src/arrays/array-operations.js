/**
  https://leetcode.com/problems/final-value-of-variable-after-performing-operations/
  2011. Final Value of Variable After Performing Operations
 */

/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function (operations) {
  let X = 0;
  for (let i = 0; i < operations.length; i++) {
    eval(operations[i]);
  }
  return X;
};
