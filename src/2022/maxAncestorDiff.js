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
var maxAncestorDiff = function(root) {
    return maxAncestor(root, root.val, root.val);
};

function maxAncestor(node, currentmin, currentmax) {
    if(!node) {
        return currentmax-currentmin;
    }
    currentmin = Math.min(currentmin, node.val);
    currentmax = Math.max(currentmax, node.val);
    return Math.max(maxAncestor(node.left, currentmin, currentmax), maxAncestor(node.right, currentmin, currentmax));
}
