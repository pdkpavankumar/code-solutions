/**
  You are given the heads of two sorted linked lists list1 and list2.

  Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

  Return the head of the merged linked list.

  Example 1:
  Input: list1 = [1,2,4], list2 = [1,3,4]
  Output: [1,1,2,3,4,4]
  
  Example 2:
  Input: list1 = [], list2 = []
  Output: []
  
  Example 3:
  Input: list1 = [], list2 = [0]
  Output: [0]
**/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    var mergeList = new ListNode();
    var originalList = mergeList;
    while(list1 && list2) {
        if(list1.val < list2.val) {
            mergeList.next = new ListNode(list1.val);
            list1 = list1.next;
        } else {
            mergeList.next = new ListNode(list2.val);
            list2 = list2.next;
        }
        mergeList = mergeList.next;
    }
    while(list1) {
        mergeList.next = new ListNode(list1.val);
        list1 = list1.next;
        mergeList = mergeList.next;
    }
    while(list2) {
        mergeList.next = new ListNode(list2.val);
        list2 = list2.next;
        mergeList = mergeList.next;
    }
    return originalList.next;
};
