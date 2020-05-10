/**
  In a town, there are N people labelled from 1 to N.  There is a rumor that one of these people is secretly the town judge.

  If the town judge exists, then:

  The town judge trusts nobody.
  Everybody (except for the town judge) trusts the town judge.
  There is exactly one person that satisfies properties 1 and 2.
  You are given trust, an array of pairs trust[i] = [a, b] representing that the person labelled a trusts the person labelled b.

  If the town judge exists and can be identified, return the label of the town judge.  Otherwise, return -1.

  Example 1:
  Input: N = 2, trust = [[1,2]]
  Output: 2
  
  Example 2:
  Input: N = 3, trust = [[1,3],[2,3]]
  Output: 3
  
  Example 3:
  Input: N = 3, trust = [[1,3],[2,3],[3,1]]
  Output: -1
  
  Example 4:
  Input: N = 3, trust = [[1,2],[2,3]]
  Output: -1
  
  Example 5:
  Input: N = 4, trust = [[1,3],[1,4],[2,3],[2,4],[4,3]]
  Output: 3
  
  Note:
  1 <= N <= 1000
  trust.length <= 10000
  trust[i] are all different
  trust[i][0] != trust[i][1]
  1 <= trust[i][0], trust[i][1] <= N
**/
/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(N, trust) {
    var trusting = {};
    for(var i=0; i<trust.length; i++) {
        if(trusting[trust[i][0]] === undefined) {
            trusting[trust[i][0]] = [trust[i][1]];
        } else {
            trusting[trust[i][0]].push(trust[i][1]);
        }
    }
    var nontrusties = [];
    for(var i=1; i<=N; i++) {
        if(trusting[i] === undefined) {nontrusties.push(i);}
    }
    for(var i=0; i<nontrusties.length; i++) {
        for(var j=1; j<N; j++) {
            if(j !== nontrusties[i] &&
               (trusting[j] === undefined || trusting[j].indexOf(nontrusties[i]) === -1)) {
                nontrusties[i] = undefined;
                break;
            }
        }
        if(nontrusties[i] !== undefined) {
            return nontrusties[i];
        }
    }
    
    return -1;
};
