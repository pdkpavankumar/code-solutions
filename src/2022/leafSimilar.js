/**
  Consider all the leaves of a binary tree, from left to right order, the values of those leaves form a leaf value sequence.

  For example, in the given tree above, the leaf value sequence is (6, 7, 4, 9, 8).

  Two binary trees are considered leaf-similar if their leaf value sequence is the same.

  Return true if and only if the two given trees with head nodes root1 and root2 are leaf-similar.

  Example 1:
  Input: root1 = [3,5,1,6,2,9,8,null,null,7,4], root2 = [3,5,1,6,7,4,2,null,null,null,null,null,null,9,8]
  Output: true
  
  Example 2:
  Input: root1 = [1,2,3], root2 = [1,3,2]
  Output: false
  
  Constraints:
  The number of nodes in each tree will be in the range [1, 200].
  Both of the given trees will have values in the range [0, 200].
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    var leaf1 = getLeafs(root1, []);
    var leaf2 = getLeafs(root2, []);
    if(leaf1.length === leaf2.length) {
        for(var i=0; i<leaf1.length; i++) {
            if(leaf1[i] !== leaf2[i]) {
                return false;
            }
        }
        return true;
    }
    return false;
};

function getLeafs(node, leafs) {
    if(node.left && node.right) {
        return [...leafs, ...getLeafs(node.left, leafs), ...getLeafs(node.right, leafs)];
    } else if(node.left) {
        return [...leafs, ...getLeafs(node.left, leafs)];
    } else if(node.right) {
        return [...leafs, ...getLeafs(node.right, leafs)];
    } else {
        return [...leafs, node.val];
    }
}
