// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function removeKFromList(l, k) {
    var arr = [];
    while(l) {
        if (l.value !== k) {
            arr.push(l.value);
        }
        l = l.next;
    }
    return arr;
}
