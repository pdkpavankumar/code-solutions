/**
  Given an integer numRows, return the first numRows of Pascal's triangle.

  In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

  Example 1:
  Input: numRows = 5
  Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
  
  Example 2:
  Input: numRows = 1
  Output: [[1]]

  Constraints:

  1 <= numRows <= 30
**/
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    var arr = [[1]];
    for(var i=2; i <= numRows; i++) {
        if(i === 2) {
            arr.push([1,1]);
        } else {
            var newarr = [];
            for(var j=3; j <= i ; j++) {
                newarr[j-3] = arr[i-2][j-3] + arr[i-2][j - 3  + 1];
            }
            arr.push([1, ...newarr, 1]);
        }
    }
    return arr;
};
