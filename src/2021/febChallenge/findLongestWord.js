/**
  Given a string and a string dictionary, find the longest string in the dictionary that can be formed by deleting some characters of the given string. 
  If there are more than one possible results, return the longest word with the smallest lexicographical order. If there is no possible result, return the empty string.

  Example 1:
  Input:
  s = "abpcplea", d = ["ale","apple","monkey","plea"]
  Output: 
  "apple"
  
  Example 2:
  Input:
  s = "abpcplea", d = ["a","b","c"]
  Output: 
  "a"
  
  Note:
  All the strings in the input will only contain lower-case letters.
  The size of the dictionary won't exceed 1,000.
  The length of all the strings in the input won't exceed 1,000.
**/
/**
 * @param {string} s
 * @param {string[]} d
 * @return {string}
 */
var findLongestWord = function(s, d) {
    var count = 0;
    var highest = '';
    function check(str, dict) {
        var i=0; j=0;
        while(i < str.length && j < dict.length) {
            if(str.charAt(i) === dict.charAt(j)) {
                i++; j++;
            } else {
                j++;
            }
        }
        return i === str.length;
    }
    for(var i=0; i < d.length; i++) {
        if(d[i].length > count || (d[i].length === count && d[i].localeCompare(highest) === -1)) {
            if(check(d[i], s)) {
                highest = d[i];
                count = d[i].length;
            }
        }
    }
    return highest;
};
