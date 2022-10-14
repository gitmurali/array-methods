// https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteMiddle = function (head) {
  let dummyHead = new ListNode(-1, head);
  let [prevOfMid, slow, fast] = [dummyHead, head, head];
  while (fast !== null && fast.next !== null) {
    prevOfMid = slow;
    slow = slow.next;
    fast = fast.next.next;
  }
  prevOfMid.next = slow.next;
  return dummyHead.next;
};
