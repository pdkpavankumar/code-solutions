/**
  Given an array of non-negative integers, you are initially positioned at the first index of the array.

  Each element in the array represents your maximum jump length at that position.

  Your goal is to reach the last index in the minimum number of jumps.

  Example:
  Input: [2,3,1,1,4]
  Output: 2
  Explanation: The minimum number of jumps to reach the last index is 2.
      Jump 1 step from index 0 to 1, then 3 steps to the last index.
  
  Note:
  You can assume that you can always reach the last index.
**/
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    if(nums.length===1) {return 0;}
    var l = nums[0];
    var s = nums[0];
    var j = 1;
    for(var i=1; i<nums.length; i++) {
        if(i === nums.length - 1) { return j;}
        if(l < nums[i] + i) {
            l = nums[i] + i;
        }
        s--;
        if(s===0) {
            j++;
            s = l - i;
        }
    }
    return j;
};
