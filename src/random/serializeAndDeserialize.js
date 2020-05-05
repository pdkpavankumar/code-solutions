/**
  Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

  Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.

  Example: 

  You may serialize the following tree:

      1
     / \
    2   3
       / \
      4   5

  as "[1,2,3,null,null,4,5]"
  Clarification: The above format is the same as how LeetCode serializes a binary tree. You do not necessarily need to follow this format, so please be creative and come up with different approaches yourself.

  Note: Do not use class member/global/static variables to store states. Your serialize and deserialize algorithms should be stateless.
**/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    if(root === null) {
        return "";
    }
    return root.val + ',' + serialize(root.left) + ',' + serialize(root.right);
}

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data, arr = data.split(',')) {
  const root = createNode(arr.shift());
  if (root) {
    root.left = deserialize(data, arr);
    root.right = deserialize(data, arr);
  }
  return root;
};

function createNode(val) {
  if (val === '') {
    return null;
  }
  return new TreeNode(parseInt(val));
}



/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
