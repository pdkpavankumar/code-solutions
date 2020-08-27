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
    var node1 = getNodes(root1);
    var node2 = getNodes(root2);
    if(node1.length !== node2.length) {return false;}
    for(var i=0; i<node1.length; i++) {
        if(node1[i] !== node2[i]) {
            return false;
        }
    }
    return true;
};

var getNodes = function(root) {
    if(root === null) { return []; }
    if(root.left === null && root.right === null) {
        return [root.val];
    }
    return [...getNodes(root.left), ...getNodes(root.right)];
    
}
