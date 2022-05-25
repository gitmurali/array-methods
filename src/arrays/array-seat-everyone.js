// https://leetcode.com/problems/minimum-number-of-moves-to-seat-everyone/
/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
const minMovesToSeat = function (seats, students) {
  seats.sort((a, b) => a - b);
  students.sort((a, b) => a - b);
  return seats.reduce((acc, cv, i) => {
    acc += Math.abs(cv - students[i]);
    return acc;
  }, 0);
};
