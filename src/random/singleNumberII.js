/**
  Given a non-empty array of integers, every element appears three times except for one, which appears exactly once. Find that single one.

  Note:
  Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

  Example 1:
  Input: [2,2,3,2]
  Output: 3
  
  Example 2:
  Input: [0,1,0,1,0,1,99]
  Output: 99

**/
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var hash = {};
    for(var i=0; i<nums.length; i++) {
        if(!!hash[nums[i]]) {
            hash[nums[i]]++;
        } else {
            hash[nums[i]] = 1;
        }
    }
    return parseInt(Object.entries(hash).filter(([key, value]) => value !== 3)[0]);
};
