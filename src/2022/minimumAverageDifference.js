/**
  You are given a 0-indexed integer array nums of length n.

  The average difference of the index i is the absolute difference between the average of the first i + 1 elements of nums and the average of the last
  n - i - 1 elements. Both averages should be rounded down to the nearest integer.

  Return the index with the minimum average difference. If there are multiple such indices, return the smallest one.

  Note:
  The absolute difference of two numbers is the absolute value of their difference.
  The average of n elements is the sum of the n elements divided (integer division) by n.
  The average of 0 elements is considered to be 0.

  Example 1:
  Input: nums = [2,5,3,9,5,3]
  Output: 3
  Explanation:
  - The average difference of index 0 is: |2 / 1 - (5 + 3 + 9 + 5 + 3) / 5| = |2 / 1 - 25 / 5| = |2 - 5| = 3.
  - The average difference of index 1 is: |(2 + 5) / 2 - (3 + 9 + 5 + 3) / 4| = |7 / 2 - 20 / 4| = |3 - 5| = 2.
  - The average difference of index 2 is: |(2 + 5 + 3) / 3 - (9 + 5 + 3) / 3| = |10 / 3 - 17 / 3| = |3 - 5| = 2.
  - The average difference of index 3 is: |(2 + 5 + 3 + 9) / 4 - (5 + 3) / 2| = |19 / 4 - 8 / 2| = |4 - 4| = 0.
  - The average difference of index 4 is: |(2 + 5 + 3 + 9 + 5) / 5 - 3 / 1| = |24 / 5 - 3 / 1| = |4 - 3| = 1.
  - The average difference of index 5 is: |(2 + 5 + 3 + 9 + 5 + 3) / 6 - 0| = |27 / 6 - 0| = |4 - 0| = 4.
  The average difference of index 3 is the minimum average difference so return 3.
  
  Example 2:
  Input: nums = [0]
  Output: 0
  Explanation:
  The only index is 0 so return 0.
  The average difference of index 0 is: |0 / 1 - 0| = |0 - 0| = 0.
**/
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverageDifference = function(nums) {
    var sum = nums.reduce((acc, curr)=> acc+=curr,0);
    var minIndex = 0;
    var minSum = 0;
    var left = 0;
    var right = sum;
    for(var i=0; i<nums.length; i++) {
        left += nums[i];
        right -= nums[i];
        var abs = Math.abs(Math.floor(left/(i+1)) - Math.floor(right/((nums.length - i - 1 === 0 ? 1 : nums.length - i - 1))));
        if(abs < minSum || i == 0) {
            minSum = abs;
            minIndex = i;
        }
//        console.log(minSum);
    }
    return minIndex;
};
