/**
  You are given two non-empty linked lists representing two non-negative integers.
  The digits are stored in reverse order, and each of their nodes contains a single digit. 
  Add the two numbers and return the sum as a linked list.

  You may assume the two numbers do not contain any leading zero, except the number 0 itself.

  Example 1:
  Input: l1 = [2,4,3], l2 = [5,6,4]
  Output: [7,0,8]
  Explanation: 342 + 465 = 807.
  
  Example 2:
  Input: l1 = [0], l2 = [0]
  Output: [0]
  
  Example 3:
  Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
  Output: [8,9,9,9,0,0,0,1]

  Constraints:
  The number of nodes in each linked list is in the range [1, 100].
  0 <= Node.val <= 9
  It is guaranteed that the list represents a number that does not have leading zeros.
**/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var l3, original;
    var carry = 0;
    var x,y;
    while(l1||l2) {
        x = 0;
        y = 0;
        if(l1) {
            x = l1.val;
            l1 = l1.next;
        }
        if(l2) {
            y = l2.val;
            l2 = l2.next;
        }
        if(!l3) {
            var z = (x+y) % 10;
            original = l3 = new ListNode(z);
            carry = Math.floor((x+y)/10);
        } else {
            var sum = x+y+carry;
            l3.next = new ListNode(sum % 10);
            carry = Math.floor(sum/10);
            l3 = l3.next;
        }
    }
    while(carry !== 0){
        l3.next = new ListNode(carry % 10);
        carry = Math.floor(carry/10);
        l3 = l3.next;
    }
    return original;
};
