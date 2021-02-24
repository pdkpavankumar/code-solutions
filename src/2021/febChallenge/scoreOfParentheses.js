/**
  Given a balanced parentheses string S, compute the score of the string based on the following rule:
  () has score 1
  AB has score A + B, where A and B are balanced parentheses strings.
  (A) has score 2 * A, where A is a balanced parentheses string.

  Example 1:
  Input: "()"
  Output: 1
  
  Example 2:
  Input: "(())"
  Output: 2
  
  Example 3:
  Input: "()()"
  Output: 2
  
  Example 4:
  Input: "(()(()))"
  Output: 6

  Note:
  S is a balanced parentheses string, containing only ( and ).
  2 <= S.length <= 50
**/
/**
 * @param {string} S
 * @return {number}
 */
var scoreOfParentheses = function(S) {
    var stack = [];
    for(var i = 0; i < S.length; i++) {
        if(S[i] === '(') {
            stack.push('(');
        } else {
            var lastItem = stack[stack.length - 1];
            if (lastItem === '(') {
                stack.pop();
                stack.push(1);
            } else if(typeof lastItem === "number") {
                while(true) {
                    var num = stack.pop();
                    if(stack.length > 0) {
                        var anotherPeek = stack[stack.length - 1];
                        if(anotherPeek === '(') {
                            stack.pop();
                            stack.push(num * 2);
                            break;
                        } else {
                            var num2 = stack.pop();
                            stack.push(num + num2);
                        }
                    } else {
                        break;
                    }
                }
                
            }
        }
    }
    return stack.reduce((a,b)=>a+b,0);
};
