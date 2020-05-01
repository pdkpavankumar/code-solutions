/**
  Given two arrays, write a function to compute their intersection - the intersection means the numbers that are in both arrays.

  Example 1:
    Input: nums1 = [1,2,2,1], nums2 = [2,2]
    Output: [2]
  Example 2:
    Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
    Output: [9,4]
    
  Note:
    Each element in the result must be unique.
    The result can be in any order.
**/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    var result = [];
    for(var i=0; i<nums1.length; i++) {
        if(result.indexOf(nums1[i]) === -1 && nums2.indexOf(nums1[i]) !== -1) {
            result.push(nums1[i]);
        }
    }
    return result;
};
