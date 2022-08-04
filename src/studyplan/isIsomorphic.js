/**
  Given two strings s and t, determine if they are isomorphic.

  Two strings s and t are isomorphic if the characters in s can be replaced to get t.

  All occurrences of a character must be replaced with another character while preserving the order of characters.
  No two characters may map to the same character, but a character may map to itself.

  Example 1:
  Input: s = "egg", t = "add"
  Output: true
  
  Example 2:
  Input: s = "foo", t = "bar"
  Output: false
  
  Example 3:
  Input: s = "paper", t = "title"
  Output: true
**/
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if(s.length !== t.length) return false;
    var map1 = {};
    var map2 = {};
    for(var i=0; i<s.length; i++) {
        var left =  s.charAt(i);
        var right =  t.charAt(i);
        if(!map1[left]) {
            map1[left] = right;   
        } else if(map1[left] !== right) {
            return false
        }
        if(!map2[right]) {
            map2[right] = left;
        } else if(map2[right] !== left) {
            return false;
        }
    }
    return true;
};
