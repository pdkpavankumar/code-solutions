/**
	Given a binary tree t, determine whether it is symmetric around its center, i.e. each side mirrors the other.
**/

//
// Binary trees are already defined with this interface:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
function isTreeSymmetric(t) {
    if(t === null) return true;
    return isSymmetric(t.left, t.right);
}

function isSymmetric(leftnode, rightnode) {
    if(leftnode === null && rightnode === null) return true;
    if(leftnode === null && rightnode !== null) return false;
    if(rightnode === null && leftnode !== null) return false;
    return leftnode.value === rightnode.value && isSymmetric(leftnode.left, rightnode.right) && isSymmetric(leftnode.right, rightnode.left);
}