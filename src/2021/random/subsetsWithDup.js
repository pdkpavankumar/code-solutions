/**
  Given an integer array nums that may contain duplicates, return all possible subsets (the power set).

  The solution set must not contain duplicate subsets. Return the solution in any order.

  Example 1:
  Input: nums = [1,2,2]
  Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]
  
  Example 2:
  Input: nums = [0]
  Output: [[],[0]]

  Constraints:
  1 <= nums.length <= 10
  -10 <= nums[i] <= 10
**/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    var res = [[]];
    nums = nums.sort((a,b) => a-b);
    
    for(var i=0; i < nums.length; i++) {
        var count = 1;
        while(nums[i+1] && nums[i] === nums[i+1]) {
            count++;
            i++;
        }
        var length = res.length;
        for(var j=0; j<length; j++) {
            var sub = res[j].slice();
            for(var k=1; k<=count; k++) {
                sub.push(nums[i]);
                res.push(sub.slice());
            }
        }
    }
    return res;
};
