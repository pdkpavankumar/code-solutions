/**
You are given two linked-lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
**/

function addLinkedList(str) {
  var [link1, link2] = str.split(' + ').map((obj) => obj.replace(")", "").replace("(",""));
  link1 = link1.split(' -> ').reverse().join("");
  link2 = link2.split(' -> ').reverse().join("");
  sum = parseInt(link1) + parseInt(link2);
  sum = sum.toString().split("").reverse("").join(" -> ");
  console.log(sum);
  return sum;
}

addLinkedList('(2 -> 4 -> 3) + (5 -> 6 -> 4)');