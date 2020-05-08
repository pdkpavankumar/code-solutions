/**
  Given a 32-bit signed integer, reverse digits of an integer.

  Example 1:

  Input: 123
  Output: 321
  Example 2:

  Input: -123
  Output: -321
  Example 3:

  Input: 120
  Output: 21
  Note:
  Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
**/
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var result = 0;
    var isPositive = x > 0;
    x = x >0 ? x : -1*x;
    if(x > Math.pow(2,31) - 1) {return 0;}
    while(true) {
        if(x !== 0) {
            result = result*10 + x%10;
            x = Math.floor(x/10);
        } else {
            break;
        }
    }
    if(result > Math.pow(2,31) - 1) {return 0;}
    return isPositive ? result : -1*result;
};
