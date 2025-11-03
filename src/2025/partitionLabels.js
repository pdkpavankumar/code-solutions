/**
    763. Partition Labels
    Solved
    Medium
    Topics
    premium lock icon
    Companies
    Hint
    You are given a string s. We want to partition the string into as many parts as possible so that each letter appears in at most one part. For example, the string "ababcc" can be partitioned into ["abab", "cc"], but partitions such as ["aba", "bcc"] or ["ab", "ab", "cc"] are invalid.
    
    Note that the partition is done so that after concatenating all the parts in order, the resultant string should be s.
    
    Return a list of integers representing the size of these parts.
    
     
    
    Example 1:
    
    Input: s = "ababcbacadefegdehijhklij"
    Output: [9,7,8]
    Explanation:
    The partition is "ababcbaca", "defegde", "hijhklij".
    This is a partition so that each letter appears in at most one part.
    A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits s into less parts.
    Example 2:
    
    Input: s = "eccbbbbdec"
    Output: [10]
     
    
    Constraints:
    
    1 <= s.length <= 500
    s consists of lowercase English letters.
     

**/
/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
    var arr = [];
    var map = {};
    for(var i=0; i<s.length; i++) {
        map[s.charAt(i)] = map[s.charAt(i)] ? {min: Math.min(i, map[s.charAt(i)].min), max: Math.max(map[s.charAt(i)].max, i)} : {min: i, max: i};
    }
    var entries = Object.entries(map);
    for(var i=0; i<entries.length; i++) {
        var ele = entries[i][1];
        if (i==0) {
            arr.push(ele);
        } else {
            var found = false;
            for(var j=0; j<arr.length; j++) {
                if((ele.min >= arr[j].min && ele.min <= arr[j].max) || (ele.max >= arr[j].min && ele.max <= arr[j].max)) {
                    arr[j].min = Math.min(ele.min, arr[j].min);
                    arr[j].max = Math.max(ele.max, arr[j].max);
                    found = true;
                    break;
                }
            }
            if(!found) {
                arr.push(ele);
            }
        }
    }
    return arr.map(e => e.max - e.min + 1);
};
