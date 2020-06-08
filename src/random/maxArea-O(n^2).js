/**
  Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai).
  n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, 
  which together with x-axis forms a container, such that the container contains the most water.

  Note: You may not slant the container and n is at least 2.

  Example:
  Input: [1,8,6,2,5,4,8,3,7]
  Output: 49
**/
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    var max = 0;
    for(var i=0; i<height.length - 1; i++) {
        for(var j = i+1; j<height.length; j++) {
            max = Math.max( Math.abs(i - j) * Math.min(height[i], height[j]), max);
        }
    }
    return max;
};
