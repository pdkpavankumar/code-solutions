/**
Given a positive integer n, generate a square matrix filled with elements from 1 to n2 in spiral order.

Example:
Input: 3
Output:
[
 [ 1, 2, 3 ],
 [ 8, 9, 4 ],
 [ 7, 6, 5 ]
]
**/
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    var matrix = new Array(n).fill(0).map(() => new Array(n).fill(0));
    var i=0;
    var j=0;
    var direction = "R"
    for(var k=1; k<=n*n; k++) {
        if (direction === 'R') {
            if (j < n && matrix[i][j] === 0) {
                matrix[i][j++] = k;   
            } else {
                direction = 'B';
                i++; j--; k--; continue;
            }   
        }
        if(direction === 'B') {
            if (i < n && matrix[i][j] === 0 ) {
                matrix[i++][j] = k
            } else {
                direction = 'L';
                j--; i--; k--; continue;
            }
        }
        if(direction === 'L') {
            if(j > -1 && matrix[i][j] === 0) {
                matrix[i][j--] = k;
            } else {
                direction = 'T';
                i--; j++; k--; continue;
            }
        }
        if(direction === 'T') {
            if(i > -1 && matrix[i][j] === 0) {
                matrix[i--][j] = k;
            } else {
                direction = 'R';
                j++; i++; k--; continue;
            }
        }
    }
    return matrix;
};
