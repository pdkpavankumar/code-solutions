// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function reverseNodesInKGroups(l, k) {
    var result = [];
    var arr = [];
    while(l) {
        arr.push(l.value);
        if (arr.length == k) {
            result = result.concat(arr.reverse());
            arr = [];
            i = 1;
        }
        l = l.next;
    }
    result = result.concat(arr);
    return result;
}
