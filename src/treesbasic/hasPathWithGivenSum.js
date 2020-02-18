/**
	Given a binary tree t and an integer s, determine whether there is a root to leaf path in t such that the sum of vertex values equals s.
**/

//
// Binary trees are already defined with this interface:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }

function hasPathWithGivenSum(t, s) {
    return path(t, 0, s);
}

function path(node, value, s) {
    var exists = false;
    if (node) {
        if(node.right && node.left) {
            exists = exists || path(node.right, value + node.value, s);
            exists = exists || path(node.left, value + node.value, s);
        } else if(node.right) {
            exists = exists || path(node.right, value + node.value, s);
        } else if(node.left) {
            exists = exists || path(node.left, value + node.value, s);
        } else {
            exists = exists || (value + node.value === s);
        }

    } else {
        exists = exists || value === s;
    }
    return exists;
}