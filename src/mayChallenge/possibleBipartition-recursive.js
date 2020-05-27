/**
  Given a set of N people (numbered 1, 2, ..., N), we would like to split everyone into two groups of any size.
  Each person may dislike some other people, and they should not go into the same group. 
  Formally, if dislikes[i] = [a, b], it means it is not allowed to put the people numbered a and b into the same group.
  Return true if and only if it is possible to split everyone into two groups in this way.

  Example 1:
  Input: N = 4, dislikes = [[1,2],[1,3],[2,4]]
  Output: true
  Explanation: group1 [1,4], group2 [2,3]
  
  Example 2:
  Input: N = 3, dislikes = [[1,2],[1,3],[2,3]]
  Output: false
  
  Example 3:
  Input: N = 5, dislikes = [[1,2],[2,3],[3,4],[4,5],[1,5]]
  Output: false

  Note:
  1 <= N <= 2000
  0 <= dislikes.length <= 10000
  1 <= dislikes[i][j] <= N
  dislikes[i][0] < dislikes[i][1]
  There does not exist i != j for which dislikes[i] == dislikes[j].
**/
/**
 * @param {number} N
 * @param {number[][]} dislikes
 * @return {boolean}
 */
var possibleBipartition = function(N, dislikes) {
    if(N<=1){return true;}
    var map = {};
    for(var i=0; i<dislikes.length; i++) {
        var [a,b] = dislikes[i];
        if(map[a] === undefined) {
            map[a] = [b];
        } else {
            map[a].push(b);
        }
        if(map[b] === undefined) {
            map[b] = [a];
        } else {
            map[b].push(a);
        }
    }
    return recursiveAdd(N, map);
};

var recursiveAdd = (n, map, group1 = [], group2 = []) => {
    if(n===0) {
        return true;
    } else {
        var opponents = map[n];
        var grp1 = true;
        var grp2 = true;
        if(opponents && opponents.length !== 0) {
            for(var i=0; i<opponents.length; i++) {
                if(grp1 && group1.indexOf(opponents[i]) !== -1) {
                    grp1 = false;
                }
                if(grp2 && group2.indexOf(opponents[i]) !== -1) {
                    grp2 = false;
                }
                if(!grp1 && !grp2) { return false; }
            }
            if(grp1 && grp2){
                var p1 = recursiveAdd(n-1, map, [... group1, n], [...group2]);
                var p2 = recursiveAdd(n-1, map, [... group1], [...group2, n]);
                return p1 || p2;
            } else if(grp1) {
                group1.push(n);
                return recursiveAdd(n-1, map, group1, group2);
            } else {
                group2.push(n);
                return recursiveAdd(n-1, map, group1, group2);
            }
        }
        return recursiveAdd(n-1, map, group1, group2);
    }
};
