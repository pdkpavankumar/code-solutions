/**
  Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

  A subsequence of a string is a new string that is formed from the original string by deleting some
  (can be none) of the characters without disturbing the relative positions of the remaining characters. 
  (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

  Example 1:
  Input: s = "abc", t = "ahbgdc"
  Output: true
  
  Example 2:
  Input: s = "axc", t = "ahbgdc"
  Output: false
**/
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    if(s.length > t.length) { return false;}
    var index = 0;
    var anotherIndex = 0;
    while(index < s.length && anotherIndex < t.length) {
        var left = s.charAt(index);
        var right = t.charAt(anotherIndex);
        if(left === right) {
            index++;
            anotherIndex++;
        } else {
            anotherIndex++;
        }   
    }
    return index === s.length;
};
