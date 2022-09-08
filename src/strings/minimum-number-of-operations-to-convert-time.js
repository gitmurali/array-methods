// https://leetcode.com/problems/minimum-number-of-operations-to-convert-time/

/**
 * @param {string} current
 * @param {string} correct
 * @return {number}
 */
var convertTime = function (current, correct) {
  if (current === correct) return 0;

  let count = 0;
  let currentInMins =
    parseInt(current.slice(3)) + parseInt(current.slice(0, 2)) * 60;
  let correctInMins =
    parseInt(correct.slice(3)) + parseInt(correct.slice(0, 2)) * 60;
  let minuteDifference = correctInMins - currentInMins;

  while (minuteDifference !== 0) {
    if (minuteDifference % 60 === 0) {
      minuteDifference -= 60;
      count++;
    } else if (minuteDifference % 15 === 0) {
      minuteDifference -= 15;
      count++;
    } else if (minuteDifference % 5 === 0) {
      minuteDifference -= 5;
      count++;
    } else {
      minuteDifference -= 1;
      count++;
    }
  }

  return count;
};

//solution 2 convert time
var convertTime = function (current, correct) {
  // 1. Seperate current and correct into Hours and Minutes
  const currentHoursMins = current.split(":");
  const correctHoursMins = correct.split(":");

  // 2. Calculate difference in minutes
  let minDifference =
    correctHoursMins[1] -
    currentHoursMins[1] +
    (correctHoursMins[0] - currentHoursMins[0]) * 60;

  // 3. Greedily take the highest minutes to lowest minutes
  let operations = 0;
  const operationValues = [60, 15, 5, 1]; // this format is maintainable and extensible since other values can easily be added
  for (const difference of operationValues) {
    while (minDifference >= difference) {
      minDifference -= difference;
      operations++;
    }
  }

  return operations;
};
