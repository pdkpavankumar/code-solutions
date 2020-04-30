/**
Given an array, nums, of n integers, find all unique triplets (three numbers, a, b, & c) in nums such that a + b + c = 0. Note that there may not be any triplets that sum to zero in nums, and that the triplets must not be duplicates.

Example:
Input: nums = [0, -1, 2, -3, 1]
Output: [0, -1, 1], [2, -3, 1]

**/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    var arr = [];
    nums = nums.sort((a,b) => a-b);
    for(var i=0;i < nums.length - 2; i++) {
        for(var j=i+1; j< nums.length - 1; j++) {
            for(var k=j+1; k < nums.length; k++) {
                if(nums[i]+nums[j]+nums[k] === 0) {
                    var result = [nums[i], nums[j], nums[k]].sort((a,b) => a-b);
                    var exists = false;
                    for(var a=0; a<arr.length; a++) {
                        if(arr[a].join("") === result.join("")){
                            exists = true;
                            break;
                        }
                    }
                    if(!exists){
                        arr.push(result);   
                    }
                }
            }
        }
    }
    return arr;
};
