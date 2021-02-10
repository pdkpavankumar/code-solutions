/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    var main = head;
    while(head) {
        var current = new Node(head.val, null, null);
        current.next = head.next;
        head.next = current;
        head = current.next;
    }
    head = main;
    while(head) {
        var current = head.next;
        current.random = head.random ? head.random.next : null;
        head = head.next.next;
    }
    head = main;
    var result = head ? head.next : null;
    while(head) {
        var current = head.next;
        head.next = current.next;
        head = head.next;
        current.next = head ? head.next : null;
    }
    return result;
};
