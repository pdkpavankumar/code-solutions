/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    var sum = nums.reduce((acc, curr)=> acc+=curr, 0);
    var leftsum = 0;
    for(var i=0; i<nums.length; i++) {
        if(leftsum === sum - leftsum - nums[i]) return i;
        leftsum += nums[i];
    }
    return -1;
};
