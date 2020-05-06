/**
  Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

  You may assume that the array is non-empty and the majority element always exist in the array.

  Example 1:

  Input: [3,2,3]
  Output: 3
  Example 2:

  Input: [2,2,1,1,1,2,2]
  Output: 2
**/
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var numsCount = {};
    var maxNumber = 0;
    var maxCount = 0;
    for(var i=0; i<nums.length; i++){
        if(numsCount[nums[i]]) {
            numsCount[nums[i]] = numsCount[nums[i]] + 1;
        } else {
            numsCount[nums[i]] = 1;
        }
        if(maxCount < numsCount[nums[i]]) {
            maxNumber = nums[i];
            maxCount = numsCount[nums[i]];
        }
    }
    return maxNumber;
};
