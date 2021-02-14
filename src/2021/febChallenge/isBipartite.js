/**
  Given an undirected graph, return true if and only if it is bipartite.

  Recall that a graph is bipartite if we can split its set of nodes into two independent subsets A and B,
  such that every edge in the graph has one node in A and another node in B.

  The graph is given in the following form: graph[i] is a list of indexes j for which the edge between nodes i and j exists. 
  Each node is an integer between 0 and graph.length - 1. There are no self edges or parallel edges: graph[i] does not contain i, and it doesn't contain any element twice.

  Example 1:
  Input: graph = [[1,3],[0,2],[1,3],[0,2]]
  Output: true
  Explanation: We can divide the vertices into two groups: {0, 2} and {1, 3}.

  Example 2:
  Input: graph = [[1,2,3],[0,2],[0,1,3],[0,2]]
  Output: false
  Explanation: We cannot find a way to divide the set of nodes into two independent subsets.

  Constraints:
  1 <= graph.length <= 100
  0 <= graph[i].length < 100
  0 <= graph[i][j] <= graph.length - 1
  graph[i][j] != i
  All the values of graph[i] are unique.
  The graph is guaranteed to be undirected. 
**/
/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function(graph) {
    var colors = new Array(graph.length).fill(-1);
    var dfs = function(i) {
        var currentColor = colors[i];
        for(var k=0; k < graph[i].length; k++) {
            if(colors[graph[i][k]] === currentColor) { 
                return false;
            }
            if(colors[graph[i][k]] === -1) {
                if(currentColor === 1) {
                    colors[graph[i][k]] = 0;
                }
                if(currentColor === 0) {
                    colors[graph[i][k]] = 1;
                }
                if(dfs(graph[i][k]) === false) {return false;}
            }
        }
        return true;
    };
    for(var i=0; i<graph.length; i++) {
        if(colors[i] === -1) {
            colors[i] = 1;
            if(dfs(i) === false) {
                return false;
            }
        }
    }
    return true;
};
