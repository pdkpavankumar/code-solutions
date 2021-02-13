/**
  In an N by N square grid, each cell is either empty (0) or blocked (1).

  A clear path from top-left to bottom-right has length k if and only if it is composed of cells C_1, C_2, ..., C_k such that:

  Adjacent cells C_i and C_{i+1} are connected 8-directionally (ie., they are different and share an edge or corner)
  C_1 is at location (0, 0) (ie. has value grid[0][0])
  C_k is at location (N-1, N-1) (ie. has value grid[N-1][N-1])
  If C_i is located at (r, c), then grid[r][c] is empty (ie. grid[r][c] == 0).
  Return the length of the shortest such clear path from top-left to bottom-right.  If such a path does not exist, return -1.

  Example 1:
  Input: [[0,1],[1,0]]
  Output: 2

  Example 2:
  Input: [[0,0,0],[1,1,0],[1,1,0]]
  Output: 4
  
  Note:
  1 <= grid.length == grid[0].length <= 100
  grid[r][c] is 0 or 1
**/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(grid) {
    if(grid.length ===0 || grid[0][0] === 1) return -1;
    var queue = [];
    var visited = new Array(grid.length).fill(-1).map(() => new Array(grid.length).fill(-1));
    var distance = new Array(grid.length).fill(0).map(() => new Array(grid.length).fill(-1));
    queue.push([0,0]);
    visited[0][0] = 1;
    distance[0][0] = 1;
    var safePush = (i, j, dist) => {
        if (i>-1 && j> -1 && i < grid.length && j < grid.length) {
            if(grid[i][j] === 0) {
                if(visited[i][j] === -1) {
                    queue.push([i, j]);
                    visited[i][j] = 1;
                    distance[i][j] = dist + 1;
                } else {
                    distance[i][j] = Math.min(distance[i][j], dist + 1);
                }
                
            }
        }
    };
    while(queue.length !== 0) {
        //enqueue
        var [i, j] = queue.splice(0, 1)[0];
        var dist = distance[i][j];
        safePush(i+1, j+1, dist);
        safePush(i+1, j, dist);
        safePush(i+1, j-1, dist);
        safePush(i, j+1, dist);
        safePush(i, j-1, dist);
        safePush(i-1, j-1, dist);
        safePush(i-1, j, dist);
        safePush(i-1, j+1, dist);
    }
    console.log(distance);
    return distance[grid.length - 1][grid.length -1];
};
