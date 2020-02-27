/**
	Note: Your solution should have O(inorder.length) time complexity, since this is what you will be asked to accomplish in an interview.

	Let's define inorder and preorder traversals of a binary tree as follows:

	Inorder traversal first visits the left subtree, then the root, then its right subtree;
	Preorder traversal first visits the root, then its left subtree, then its right subtree.
	For example, if tree looks like this:

		1
	   / \
	  2   3
	 /   / \
	4   5   6
	then the traversals will be as follows:

	Inorder traversal: [4, 2, 1, 5, 3, 6]
	Preorder traversal: [1, 2, 4, 3, 5, 6]
	Given the inorder and preorder traversals of a binary tree t, but not t itself, restore t and return it.
**/

//
// Binary trees are already defined with this interface:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
function restoreBinaryTree(inorder, preorder) {
    if(preorder.length == 0 || inorder.length == 0) {return null;}
    var node = preorder.splice(0, 1);
    var lefttree = inorder.splice(0, inorder.indexOf(node[0]));
    inorder.splice(0, 1);
    var righttree = inorder;
    return {
                value : node[0],
                left: restoreBinaryTree(lefttree, preorder),
                right: restoreBinaryTree(righttree, preorder)
            };
}
