// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function isListPalindrome(l) {
    var isPlandrome = true;
    var a = [];
    console.log(l);
    while(l) {
        a.push(l.value);
        l=l.next;
    }
    for(i=0; i<a.length/2; i++) {
        if(a[i] !== a[a.length - i -1]) {
            isPlandrome = false;
            break;
        }
    }

    return isPlandrome;
}
