/**
  Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

  Examples:

  s = "leetcode"
  return 0.

  s = "loveleetcode",
  return 2.
  Note: You may assume the string contain only lowercase letters.
**/
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    var map = {};
    s = s.split("");
    for(var i=0; i < s.length; i++) {
        if(map[s[i]] !== undefined) {
            map[s[i]].count = map[s[i]].count + 1;
        } else {
            map[s[i]] = {
                count: 1,
                index: i
            };
        }
    }
    var values = Object.values(map);
    for(var i=0; i < values.length; i++) {
        if(values[i].count === 1) {
            return values[i].index;
        }
    }
    return -1;
};
