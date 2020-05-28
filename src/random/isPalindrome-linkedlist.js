/**
  Given a singly linked list, determine if it is a palindrome.

  Example 1:
  Input: 1->2
  Output: false
  
  Example 2:
  Input: 1->2->2->1
  Output: true
  
  Follow up:
  Could you do it in O(n) time and O(1) space?
**/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    var str='';
    while(head) {
        str = head.val + str + head.val;
        head = head.next;
    }
    return str.substring(0, str.length/2) === str.substring(str.length/2, str.length);
    
};
