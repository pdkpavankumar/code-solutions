/**
  Given a non-empty binary tree, return the average value of the nodes on each level in the form of an array.
  
  Example 1:
  Input:
      3
     / \
    9  20
      /  \
     15   7
  Output: [3, 14.5, 11]
  
  Explanation:
  The average value of nodes on level 0 is 3,  on level 1 is 14.5, and on level 2 is 11. Hence return [3, 14.5, 11].
  
  Note:
  The range of node's value is in the range of 32-bit signed integer.
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
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    if(root === null) {return 0;}
    var queue = [];
    var avg = [];
    var count = 0;
    var sum = 0;
    queue.push(root);
    queue.push(null);
    while(queue.length > 0) {
        var [enqueue] = queue.splice(0, 1);
        if(enqueue !== null) {
            sum += enqueue.val;
            count++;
            enqueue.left && queue.push(enqueue.left);
            enqueue.right && queue.push(enqueue.right);
        } else if(queue.length > 0) {
            avg.push(sum/count);
            count = 0;
            sum = 0;
            queue.push(null);
        }
    }
    if(count !== 0) { avg.push(sum/count); }
    return avg;
};
