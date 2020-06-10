/**
  Given a positive integer, return its corresponding column title as appear in an Excel sheet.

  For example:
      1 -> A
      2 -> B
      3 -> C
      ...
      26 -> Z
      27 -> AA
      28 -> AB 
      ...
  Example 1:
  Input: 1
  Output: "A"
  
  Example 2:
  Input: 28
  Output: "AB"
  
  Example 3:
  Input: 701
  Output: "ZY"
**/
/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    var str = '';
    while(n>0) {
        var num = n%26;
        str = String.fromCharCode((num === 0 ? 26 : num) + 64) + str;
        if(n===26) {break;}
        n = Math.floor(n/26);
        if(num===0) {n--;}
    }
    return str;
};
