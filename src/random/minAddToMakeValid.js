/**
  Given a string S of '(' and ')' parentheses, we add the minimum number of parentheses ( '(' or ')', and in any positions ) 
  so that the resulting parentheses string is valid.

  Formally, a parentheses string is valid if and only if:

  It is the empty string, or
  It can be written as AB (A concatenated with B), where A and B are valid strings, or
  It can be written as (A), where A is a valid string.
  Given a parentheses string, return the minimum number of parentheses we must add to make the resulting string valid.

  Example 1:
  Input: "())"
  Output: 1
  
  Example 2:
  Input: "((("
  Output: 3
  
  Example 3:
  Input: "()"
  Output: 0
  
  Example 4:
  Input: "()))(("
  Output: 4

  Note:
  S.length <= 1000
  S only consists of '(' and ')' characters.
**/
/**
 * @param {string} S
 * @return {number}
 */
var minAddToMakeValid = function(S) {
    var stack = [];
    for(var i=0; i<S.length; i++) {
        if(stack.length === 0) {
            stack.push(S.charAt(i));
        } else {
            var char = stack.pop();
            if((S.charAt(i) === ')' && char === '(') || (S.charAt(i) === '()' && char === ')')) {
                continue;
            } else {
                stack.push(char);
                stack.push(S.charAt(i));
            }
        }
    }
    return stack.length;
};
