/**
  Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

  Example:
  Input: 1->2->4, 1->3->4
  Output: 1->1->2->3->4->4
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
var mergeTwoLists = function(l1, l2) {
    var root;
    if(!l1 && !l2) {return null}
    if(!l1) {return l2;}
    if(!l2) {return l1;}
    if(l1.val < l2.val) {
      root = l1;
    } else {
        root = l2
        l2 = l1;
    } 
    var prev = root;
    var current = root.next;
    while(l2 !== null && current !== null) {
        if(current.val >= l2.val) {
            var node = new ListNode(l2.val, prev.next);
            prev.next = node;
            l2 = l2.next;
            prev = node;
        } else if(current.next !== null){
            prev = current;
            current = current.next;
        } else {
            current.next = l2;
            break;
        }
    }
    if(l2!==null) {
        if(current === null) {
            prev.next = l2;    
        } else {
            current.next = l2;
        }
    }
    return root;
};
