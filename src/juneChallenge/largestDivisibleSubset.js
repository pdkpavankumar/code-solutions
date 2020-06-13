/**
  Given a set of distinct positive integers, find the largest subset such that every pair (Si, Sj) of elements in this subset satisfies:

  Si % Sj = 0 or Sj % Si = 0.

  If there are multiple solutions, return any subset is fine.

  Example 1:
  Input: [1,2,3]
  Output: [1,2] (of course, [1,3] will also be ok)
  
  Example 2:
  Input: [1,2,4,8]
  Output: [1,2,4,8]
**/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function(nums) {
    if(nums.length === 0) {return nums;}
    var result = [];
    nums = nums.sort((a,b) => a - b);
    var dp = Array(nums.length).fill(1);
    var max = 1;
    for(var i=1; i<nums.length; i++) {
        for(var j=0; j<i; j++) {
            if(nums[i] % nums[j] === 0 && dp[i] <= 1+dp[j]) {
                dp[i] = dp[j] + 1;
                if(max < dp[i]) {
                    max = dp[i];
                }
            }
        }
    }
    var old = -1;
    for(var i=dp.length-1; i>=0; i--) {
        if(dp[i] === max && (old === -1 || old%nums[i] === 0)) {
            result.unshift(nums[i]);
            max--;
            old = nums[i];
        }
    }
    return result;
};
