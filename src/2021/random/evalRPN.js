/**
  Evaluate the value of an arithmetic expression in Reverse Polish Notation.

  Valid operators are +, -, *, and /. Each operand may be an integer or another expression.

  Note that division between two integers should truncate toward zero.

  It is guaranteed that the given RPN expression is always valid. That means the expression would always evaluate to a result,
  and there will not be any division by zero operation.

  Example 1:
  Input: tokens = ["2","1","+","3","*"]
  Output: 9
  Explanation: ((2 + 1) * 3) = 9
  
  Example 2:
  Input: tokens = ["4","13","5","/","+"]
  Output: 6
  Explanation: (4 + (13 / 5)) = 6
  
  Example 3:
  Input: tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
  Output: 22
  Explanation: ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
  = ((10 * (6 / (12 * -11))) + 17) + 5
  = ((10 * (6 / -132)) + 17) + 5
  = ((10 * 0) + 17) + 5
  = (0 + 17) + 5
  = 17 + 5
  = 22

  Constraints:
  1 <= tokens.length <= 104
  tokens[i] is either an operator: "+", "-", "*", or "/", or an integer in the range [-200, 200].
**/
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    var stack = [];
    for(var i=0; i<tokens.length; i++) {
        if(!isNaN(tokens[i])) {
            stack.push(Number(tokens[i]));
        } else {
            var num1 = stack.pop();
            var num2 = stack.pop();
            switch(tokens[i]) {
                case '+':
                    stack.push(num1 + num2); break;
                case '-':
                    stack.push(num2 - num1); break;
                case '*':
                    stack.push(num1 * num2); break;
                case '/':
                    stack.push(num2 / num1 < 0 ? Math.ceil(num2 / num1) : Math.floor(num2 / num1)); break;
            }
        }
    }
    return stack.pop();
};
