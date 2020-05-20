/**
  Given a binary search tree, write a function kthSmallest to find the kth smallest element in it.
  
  Note:
  You may assume k is always valid, 1 ≤ k ≤ BST's total elements.
  
  Example 1:
  Input: root = [3,1,4,null,2], k = 1
     3
    / \
   1   4
    \
     2
  Output: 1
  
  Example 2:
  Input: root = [5,3,6,2,4,null,null,1], k = 3
         5
        / \
       3   6
      / \
     2   4
    /
   1
  Output: 3
  
  Follow up:
  What if the BST is modified (insert/delete operations) often and you need to find the kth smallest frequently? 
  How would you optimize the kthSmallest routine?
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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    var inorder = getInorder(root);
    inorder = inorder.split(',');
    inorder = inorder.filter(ele => ele !== null && ele !== '');
    return inorder[k-1];
};

var getInorder = (root) => {
    if(root === null) {return null;}
    if(root.left !== null && !root.right !== null) {
        return [getInorder(root.left), root.val, getInorder(root.right)].join(',');
    } else if(root.left !== null) {
        return [getInorder(root.left), root.val].join(',');
    } else if(root.right !== null) {
        return [root.val, getInorder(root.right)].join(',');
    } else {
        return root.val + '';
    }
};
