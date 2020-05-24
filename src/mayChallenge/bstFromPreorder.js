/**
  Return the root node of a binary search tree that matches the given preorder traversal.

  (Recall that a binary search tree is a binary tree where for every node, any descendant of node.left has a value < node.val, 
  and any descendant of node.right has a value > node.val.  Also recall that a preorder traversal displays the value of the node first, 
  then traverses node.left, then traverses node.right.)

  It's guaranteed that for the given test cases there is always possible to find a binary search tree with the given requirements.

  Example 1:
  Input: [8,5,1,7,10,12]
  Output: [8,5,10,1,7,null,12]

  Constraints:
  1 <= preorder.length <= 100
  1 <= preorder[i] <= 10^8
  The values of preorder are distinct.
**/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function(preorder) {
    var root;
    var node;
    for(var i=0; i<preorder.length; i++) {
        var treeNode = new TreeNode(preorder[i]);
        if(root === undefined) {root = treeNode; continue;}
        node = root;
        while(true) {
            if(node.val < preorder[i]) {
                if(node.right === null) {
                    node.right = treeNode;
                    break;
                } else {
                    node = node.right;
                }
            } else {
                if(node.left === null) {
                    node.left = treeNode;
                    break;
                } else {
                    node = node.left;
                }
            }
        }
    }
    return root;
};
