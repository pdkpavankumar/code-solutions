/**
Given an array of strings, group anagrams together.

Example:

Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
Note:

All inputs will be in lowercase.
The order of your output does not matter.
**/
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    var anargam = {};
    for(var i=0; i < strs.length; i++) {
        var key = strs[i].split("").sort().join("");
        if(!anargam[key]) {
            anargam[key]=[strs[i]];
        } else {
            anargam[key].push(strs[i]);
        }
    }
    return Object.values(anargam);
};
