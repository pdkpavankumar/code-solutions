/**
  Find the sum of all left leaves in a given binary tree.
  Example:
      3
     / \
    9  20
      /  \
     15   7
  There are two left leaves in the binary tree, with values 9 and 15 respectively. Return 24.
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
 * @param {TreeNode} root
 * @return {number}
 */
var num;
var sumOfLeftLeaves = function(root) {
    num = 0;
    root && (root.left || root.right) &&leftLeave(root);
    return num;
};

var leftLeave = function(root, side) {
    if(root !== null) {
        if(root.left == null && root.right === null && side !== 'right') {
            num += root.val;
        }
        leftLeave(root.left, 'left');
        leftLeave(root.right, 'right');
    }
}
