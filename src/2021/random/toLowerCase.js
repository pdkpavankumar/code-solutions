/**
  Given a string s, return the string after replacing every uppercase letter with the same lowercase letter.

  Example 1:
  Input: s = "Hello"
  Output: "hello"
  
  Example 2:
  Input: s = "here"
  Output: "here"
  
  Example 3:
  Input: s = "LOVELY"
  Output: "lovely"

  Constraints:
  1 <= s.length <= 100
  s consists of printable ASCII characters.
**/
/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function(s) {
    return s.split("").map((ele) => ele.charCodeAt(0) >= 65 && ele.charCodeAt(0) <= 90 ? String.fromCharCode(ele.charCodeAt(0) + 32) : ele).join("");
};
