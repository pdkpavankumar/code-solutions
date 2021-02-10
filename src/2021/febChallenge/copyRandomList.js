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
    var map = new Map();
    var main = head;
    while(head) {
        var current = new Node(head.val, null, null);
        map.set(head, current);
        head = head.next;
    }
    head = main
    while(head) {
        var current = map.get(head) || null;
        var next = map.get(head.next) || null;
        var random = map.get(head.random) || null;
        current.next = next;
        current.random = random;
        head = head.next;
    }
    return map.get(main);
};
