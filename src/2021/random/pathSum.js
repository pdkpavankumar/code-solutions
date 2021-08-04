
/**
  Given the root of a binary tree and an integer targetSum, return all root-to-leaf paths where each path's sum equals targetSum.
  A leaf is a node with no children.

  Example 1:
  Input: root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
  Output: [[5,4,11,2],[5,8,4,5]]
  
  Example 2:
  Input: root = [1,2,3], targetSum = 5
  Output: []
  
  Example 3:
  Input: root = [1,2], targetSum = 0
  Output: []

  Constraints:
  The number of nodes in the tree is in the range [0, 5000].
  -1000 <= Node.val <= 1000
  -1000 <= targetSum <= 1000
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
 * @param {number} targetSum
 * @return {number[][]}
 */
var mainResult;
var pathSum = function(root, targetSum) {
    mainResult = [];
    subPath(root, 0, targetSum, []);
    return mainResult;
};

var subPath = function(root, sum = 0, targetSum, result) {
    if(root) {
        sum = sum + root.val;
        result.push(root.val);
        root.left && subPath(root.left, sum, targetSum, [...result])
        root.right && subPath(root.right, sum, targetSum, [...result]);
         if(sum === targetSum) {
            if(!root.left && !root.right) {
                mainResult.push(result);
            }
        }
    }
};
