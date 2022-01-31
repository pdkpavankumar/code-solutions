/**

  You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the ith customer has in the jth bank.
  Return the wealth that the richest customer has.
  A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.

**/
/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    return accounts.reduce((acc, curr) => Math.max(acc, curr.reduce((a,b) => a+=b, 0)), 0);
};
