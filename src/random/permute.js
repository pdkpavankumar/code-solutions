/**
  Given a collection of distinct integers, return all possible permutations.
  
  Example:
  Input: [1,2,3]
  Output:
  [
    [1,2,3],
    [1,3,2],
    [2,1,3],
    [2,3,1],
    [3,1,2],
    [3,2,1]
  ]
**/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums, set = [], answers = []) {
    if(nums.length ===0) {answers.push([...set]);}
    for(var i=0; i<nums.length; i++) {
        const newnums = nums.filter((n, index) => index!== i);
        set.push(nums[i]);
        permute(newnums, set, answers);
        set.pop();
    }
    return answers;
};
