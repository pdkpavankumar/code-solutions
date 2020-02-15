// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function rearrangeLastN(l, n) {
    var arr = [];
    while(l) {
        arr.push(l.value);
        l = l.next;
    }
    var result = arr.splice(arr.length - n, n);
    result = result.concat(arr);
    return result;
}
