/**
  Write an efficient algorithm that searches for a target value in an m x n integer matrix. The matrix has the following properties:

  Integers in each row are sorted in ascending from left to right.
  Integers in each column are sorted in ascending from top to bottom.

  Example 1:
  Input: matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 5
  Output: true
  
  Example 2:
  Input: matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 20
  Output: false

  Constraints:
  m == matrix.length
  n == matrix[i].length
  1 <= n, m <= 300
  -109 <= matix[i][j] <= 109
  All the integers in each row are sorted in ascending order.
  All the integers in each column are sorted in ascending order.
  -109 <= target <= 109
**/
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if(matrix === null || matrix.length === 0) { return false;}
    var i = 0;
    var j = matrix[i].length - 1;
    while(i<matrix.length && j>=0) {
        if(matrix[i][j] === target) {return true;}
        else if(matrix[i][j] > target) { j--; }
        else { i++; }
    }
    return false;
};
