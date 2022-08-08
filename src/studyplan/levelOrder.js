/**
  102. Binary Tree Level Order Traversal

  Example 1:
  Input: root = [3,9,20,null,null,15,7]
  Output: [[3],[9,20],[15,7]]
  
  Example 2:
  Input: root = [1]
  Output: [[1]]
  
  Example 3:
  Input: root = []
  Output: []

  Constraints:
  The number of nodes in the tree is in the range [0, 2000].
  -1000 <= Node.val <= 1000
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
 * @return {number[][]}
 */
var levelOrder = function(root, level = 0, arr = []) {
    if(!root || root.length === 0) {return [];}
    arr[level] = arr[level] || [];
    root && arr[level].push(root.val);
    root && root.left && levelOrder(root.left, level+1, arr);
    root && root.right && levelOrder(root.right, level+1, arr);
    return arr;
};
