/**
  Given the root of a Binary Search Tree (BST), convert it to a Greater Tree such that every key of the original BST 
  is changed to the original key plus sum of all keys greater than the original key in BST.

  As a reminder, a binary search tree is a tree that satisfies these constraints:

  The left subtree of a node contains only nodes with keys less than the node's key.
  The right subtree of a node contains only nodes with keys greater than the node's key.
  Both the left and right subtrees must also be binary search trees.
  Note: This question is the same as 1038: https://leetcode.com/problems/binary-search-tree-to-greater-sum-tree/

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
 * @return {TreeNode}
 */
var convertBST = function(root) {
    var getGreat = (node, sum) => {
        if(!node) {return sum;}
        node.val = node.val + getGreat(node.right, sum);
        return getGreat(node.left, node.val);
    };
    
    getGreat(root, 0);
    
    return root;
};
