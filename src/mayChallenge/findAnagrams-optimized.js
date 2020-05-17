/**
  Given a string s and a non-empty string p, find all the start indices of p's anagrams in s.

  Strings consists of lowercase English letters only and the length of both strings s and p will not be larger than 20,100.

  The order of output does not matter.

  Example 1:
  Input:
  s: "cbaebabacd" p: "abc"
  Output:
  [0, 6]
  Explanation:
  The substring with start index = 0 is "cba", which is an anagram of "abc".
  The substring with start index = 6 is "bac", which is an anagram of "abc".
  
  Example 2:
  Input:
  s: "abab" p: "ab"
  Output:
  [0, 1, 2]
  Explanation:
  The substring with start index = 0 is "ab", which is an anagram of "ab".
  The substring with start index = 1 is "ba", which is an anagram of "ab".
  The substring with start index = 2 is "ab", which is an anagram of "ab".
**/
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    var arr = [];
    p = p.split("");
    var pattern = {};
    for(var i=0; i<p.length; i++) {
        if(pattern[p[i]] === undefined) {
            pattern[p[i]] = 1;
        } else {
            pattern[p[i]] = pattern[p[i]] + 1;
        }
    }
    var tofind = Object.keys(pattern).length;
    var start = 0;
    var end = 0;
    while(end < s.length) {
        const endChar = s.charAt(end);
        if(pattern[endChar] !== undefined) {
            pattern[endChar]--;
            if(pattern[endChar] === 0) {tofind--;}
        }
        end++;
        while(tofind === 0) {
            if(end - start === p.length){arr.push(start);}
            const startchar = s.charAt(start);
            if(pattern[startchar] !== undefined) {
                pattern[startchar]++;
                if(pattern[startchar] > 0) { tofind++; }
            }
            start++;
        }
    }
    return arr;
};
