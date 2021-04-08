/**
  Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

  A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

  Example 1:
  Input: digits = "23"
  Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
  
  Example 2:
  Input: digits = ""
  Output: []
  
  Example 3:
  Input: digits = "2"
  Output: ["a","b","c"]

  Constraints:
  0 <= digits.length <= 4
  digits[i] is a digit in the range ['2', '9'].
**/
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    var map = {
        '2' : 'abc',
        '3' : 'def',
        '4' : 'ghi',
        '5' : 'jkl',
        '6' : 'mno',
        '7' : 'pqrs',
        '8' : 'tuv',
        '9' : 'wxyz'
    };
    var arr = [];
    for(var i=0; i<digits.length; i++) {
        var chars = map[digits.charAt(i)].split("");
        if(arr.length === 0) {
            for(var j=0; j<chars.length; j++) {
                arr.push(chars[j]);
            }
        } else {
            var mid = [...arr];
            var arr = [];
            for(var k=0; k<mid.length; k++) {
                for(var j=0; j<chars.length;j++) {
                    arr.push(mid[k] + chars[j]);
                }   
            }
        }
    }
    return arr;
};
