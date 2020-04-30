/**

  This problem was recently asked by Amazon:

  You are given an array of integers. Return an array of the same size where the element at each index is the product of all the elements in the original array except for the element at that index.

  For example, an input of [1, 2, 3, 4, 5] should return [120, 60, 40, 30, 24].

  You cannot use division in this problem.

**/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    var arr = [];
    for(var i=0; i<nums.length; i++) {
        for(var j=0; j<nums.length; j++) {
            if(arr[j] === undefined) { arr[j] = 1; }
            if(i!=j) {
                arr[j] = nums[i] * arr[j];   
            }
        }
    }
    return arr;
};
