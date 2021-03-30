/**
  You are given a 2D array of integers envelopes where envelopes[i] = [wi, hi] represents the width and the height of an envelope.

  One envelope can fit into another if and only if both the width and height of one envelope is greater than the width and height of the other envelope.

  Return the maximum number of envelopes can you Russian doll (i.e., put one inside the other).

  Note: You cannot rotate an envelope.

  Example 1:
  Input: envelopes = [[5,4],[6,4],[6,7],[2,3]]
  Output: 3
  Explanation: The maximum number of envelopes you can Russian doll is 3 ([2,3] => [5,4] => [6,7]).
  
  Example 2:
  Input: envelopes = [[1,1],[1,1],[1,1]]
  Output: 1

  Constraints:
  1 <= envelopes.length <= 5000
  envelopes[i].length == 2
  1 <= wi, hi <= 104
**/
/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function(envelopes) {
    if(!envelopes || !envelopes[0]) return 0;
    if(envelopes.length <2) return envelopes.length;
    envelopes.sort((a,b) => a[0]-b[0] === 0 ? b[1] - a[1]:a[0] - b[0]);
    var dp = new Array(envelopes.length).fill(1);
    var max = 1;
    for(var i=1; i<envelopes.length; i++) {
        for(var j=0; j<i; j++) {
            if(envelopes[i][1] > envelopes[j][1] && dp[i] < dp[j] + 1) {
                dp[i] = dp[j] + 1;
            }
        }
        max = Math.max(dp[i], max);
    }
    return max;
};
