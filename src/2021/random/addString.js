/**

  Back to Chapter
  Add Strings

Solution
Given two non-negative integers, num1 and num2 represented as string, return the sum of num1 and num2 as a string.

You must solve the problem without using any built-in library for handling large integers (such as BigInteger). You must also not convert the inputs to integers directly.

Example 1:
Input: num1 = "11", num2 = "123"
Output: "134"

Example 2:
Input: num1 = "456", num2 = "77"
Output: "533"

Example 3:
Input: num1 = "0", num2 = "0"
Output: "0"

Constraints:

1 <= num1.length, num2.length <= 104
num1 and num2 consist of only digits.
num1 and num2 don't have any leading zeros except for the zero itself.
**/
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    var result = [];
    var map = {
        '0': 0,
        '1' : 1,
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9
    };
    if(num1.length < num2.length) {
        [num1, num2] = [num2, num1];
    }
    var carry = 0;
    for(var i=0; i<num1.length; i++) {
        var res = 0 ;
        res = (i < num2.length ? map[num2.charAt(num2.length - i - 1)]: 0 )+ map[num1.charAt(num1.length -i - 1)] + carry;
        if(res>9){
            carry = 1;
            res = res % 10;
        } else {
            carry = 0;
        }
        result.push(res);
    }
    if(carry != 0) { result.push(1); }
    return result.reverse().join('');
};
