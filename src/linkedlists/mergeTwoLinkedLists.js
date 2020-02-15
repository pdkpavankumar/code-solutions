// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function mergeTwoLinkedLists(l1, l2) {
    var arr = [];
    while(l1 && l2) {
        if(l1.value < l2.value) {
            arr.push(l1.value);
            l1 = l1.next;
        } else {
            arr.push(l2.value);
            l2 = l2.next;
        }
    }
    if(l2) {
        while(l2){
            arr.push(l2.value);
            l2 = l2.next;
        }
    }
    if(l1) {
        while(l1){
            arr.push(l1.value);
            l1 = l1.next;
        }
    }
    return arr;
}
