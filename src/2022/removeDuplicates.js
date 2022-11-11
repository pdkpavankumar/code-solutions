/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var k = 1;
    var i = 0;
    var j = 0;
    while(j<nums.length) {
        if(nums[i] === nums[j]) {
            j++;
        } else {
            k++;
            nums[i+1] = nums[j];
            i++;
            j++;
        }
    }
    return k;
};
