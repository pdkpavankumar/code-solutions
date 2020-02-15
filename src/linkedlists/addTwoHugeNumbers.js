// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function addTwoHugeNumbers(a, b) {
    var first = '';
    var second = '';
    while(a || b) {
        if(a) {
            first += ('0000' + a.value).slice(-4);
            a = a.next;
        }
        if(b) {
            second += ('0000' + b.value).slice(-4);
            b = b.next;
        }
    }
    var result = '';
    var arr = [];
    var carry = 0;
    for(var i=1; i<=first.length || i<=second.length; i++) {
        var sum = 0;
        i <= first.length && (sum += Number(first.charAt(first.length - i)));
        i <= second.length && (sum += Number(second.charAt(second.length - i)));
        sum += carry;
        carry = Math.floor(sum/10);
        sum = sum % 10;
        result = sum+result;
    }
    if(carry > 0) {
        result = carry + result;
    }
    return (result.match(/.{1,4}(?=(.{4})+(?!.))|.{1,4}$/g).map((obj) => parseInt(obj)));
}
