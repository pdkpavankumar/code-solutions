/**
  Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

  For example, given n = 3, a solution set is:
  [
    "((()))",
    "(()())",
    "(())()",
    "()(())",
    "()()()"
  ]
**/
/**
 * @param {number} n
 * @return {string[]}
 */
var brackets = [];
var generateParenthesis = function(n) {
    brackets=[];
    getBrackets(n,n);
    return brackets;
};

var getBrackets = (open, closed, str = '') => {
    if(open === 0 && closed === 0) {brackets.push(str); return;}
    if(open > 0) {
        getBrackets(open-1, closed, str+'(');
    }
    if(open < closed) {
        getBrackets(open, closed-1, str+')');
    }
}
