/**
  Given two strings s1 and s2, write a function to return true if s2 contains the permutation of s1. In other words,
  one of the first string's permutations is the substring of the second string.

  Example 1:
  Input: s1 = "ab" s2 = "eidbaooo"
  Output: True
  Explanation: s2 contains one permutation of s1 ("ba").
  
  Example 2:
  Input:s1= "ab" s2 = "eidboaoo"
  Output: False

  Note:
  The input strings only contain lower case letters.
  The length of both given strings is in range [1, 10,000].

**/
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    if(!s1&&!s2) {return false;}
    var map = {};
    for(var i=0; i<s1.length; i++) {
        if(map[s1.charAt(i)] === undefined) {
            map[s1.charAt(i)] = 1;
        } else {
            map[s1.charAt(i)]++;
        }
    }
    var start = 0;
    var end = 0;
    var find = s1.length;
    while(end < s2.length) {
        var endChar = s2.charAt(end);
        if(map[endChar] !== undefined && map[endChar] > 0) {
            map[endChar]--;
            end++;
            find--;
        } else {
            if(find===0) {return true;}
            if(map[endChar] === undefined) {
                while(start<end) {
                    var startChar = s2.charAt(start);
                    if(map[startChar] !== undefined) {
                        map[startChar]++;
                        find++;
                    }
                    start++;
                }
                end++;
                start++;
            } else {
                var startChar = s2.charAt(start);
                if(map[startChar] !== undefined) {
                    map[startChar]++;
                    find++;
                }
                start++;   
            }
        }
        if(find === 0) { return true; }
    }
    return find == 0;
};
