/**
  Given a non-empty binary tree, find the maximum path sum.

  For this problem, a path is defined as any sequence of nodes from some starting node to any node in the tree
  along the parent-child connections. The path must contain at least one node and does not need to go through the root.

  Example 1:
  Input: [1,2,3]
       1
      / \
     2   3
  Output: 6
  
  Example 2:
  Input: [-10,9,20,null,null,15,7]
   -10
   / \
  9  20
    /  \
   15   7
  Output: 42
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
var maxsum;
var maxPathSum = function(root) {
    maxsum = -Infinity;
    getMax(root);
    return maxsum;
};

var getMax = (root) => {
    if(!root) {return 0;}
    var leftmax = Math.max(getMax(root.left), 0);
    var rightmax = Math.max(getMax(root.right), 0);
    maxsum = Math.max(maxsum, leftmax + rightmax + root.val);
    return Math.max(leftmax, rightmax) + root.val;
};
