// https://leetcode.com/problems/my-calendar-iii/

var MyCalendarThree = function () {
  this.map = {};
};

/**
 * @param {number} start
 * @param {number} end
 * @return {number}
 */
MyCalendarThree.prototype.book = function (start, end) {
  if (!this.map[start]) this.map[start] = 0;
  this.map[start]++;
  if (!this.map[end]) this.map[end] = 0;
  this.map[end]--;
  let answer = 0;
  let curr = 0;
  console.log(this.map);
  for (let key in this.map) {
    curr += this.map[key];
    answer = Math.max(answer, curr);
  }
  return answer;
};

/**
 * Your MyCalendarThree object will be instantiated and called as such:
 * var obj = new MyCalendarThree()
 * var param_1 = obj.book(start,end)
 */
