/**
  Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

  Example 1:
  Input: "babad"
  Output: "bab"
  
  Note: "aba" is also a valid answer.
  
  Example 2:
  Input: "cbbd"
  Output: "bb"
**/
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    var palandrome = '';
    var length = s.split("").length;
    palandrome = s.substr(0,1).split("");
    for(var i=1; i<length; i++) {
        for(var j=Math.floor(palandrome.length/2); i - j >=0 && i+j-1< length;j++) {
            var str = s.substring(i - j, i+j+1);
            var str2 = s.substring(i-j, i+j);
            var is1 = isPalandrome(str);
            var is2 = isPalandrome(str2)
            if (is1 && str.split("").length > palandrome.length) {
                palandrome = str.split("");
            }
            if (is2 && str2.split("").length > palandrome.length) {
                palandrome = str2.split("");
            }
            if(!is1 && !is2) {break;}
        }
    }
    return palandrome.join("");
};

var isPalandrome = function(s) {
    var length = s.split("").length;
    if(length % 2==0) {
        return s.substr(0, length/2) == s.substr(length/2, length -1).split("").reverse().join("");
    } else {
        return s.substr(0, Math.round(length/2) -1) == s.substr(Math.floor(length/2) + 1, length -1).split("").reverse().join("");
    }
}
