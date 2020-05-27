/**
  Given an array of integers and an integer k, you need to find the total number of continuous subarrays whose sum equals to k.

  Example 1:
  Input:nums = [1,1,1], k = 2
  Output: 2

  Constraints:
  The length of the array is in range [1, 20,000].
  The range of numbers in the array is [-1000, 1000] and the range of the integer k is [-1e7, 1e7].
**/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    var hash = {};
    var count = 0;
    var lastindex = 0;
    for(var i=0; i<nums.length; i++) {
        for(var j = i; j<nums.length; j++) {
            if(hash[i] === undefined) {
                hash[i] = parseInt(nums[j]);
            } else {
                hash[i] += parseInt(nums[j]);
            }
            if(hash[i] === k) {count++;}
        }
    }
    return count;
};
