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
    var min = [0];
    for(var j=1; j<nums.length; j++) {
        if(j===1) {min.push(1);}
        else {
            var minI = 0;
            for(var i=0; i<j; i++) {
                if(nums[i]>=j-i) {
                    if(minI === 0) {
                        minI = min[i] + 1;    
                    } else if(minI > min[i] + 1){
                        minI = min[i] + 1;
                    }
                }
            }
            min.push(minI);
        }
    }
    return min.pop();
};
