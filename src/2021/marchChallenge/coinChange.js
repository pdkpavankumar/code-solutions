/**
  You are given coins of different denominations and a total amount of money amount. 
  Write a function to compute the fewest number of coins that you need to make up that amount.
  If that amount of money cannot be made up by any combination of the coins, return -1.

  You may assume that you have an infinite number of each kind of coin.

  Example 1:
  Input: coins = [1,2,5], amount = 11
  Output: 3
  Explanation: 11 = 5 + 5 + 1
  
  Example 2:
  Input: coins = [2], amount = 3
  Output: -1
  
  Example 3:
  Input: coins = [1], amount = 0
  Output: 0
  
  Example 4:
  Input: coins = [1], amount = 1
  Output: 1
  
  Example 5:
  Input: coins = [1], amount = 2
  Output: 2

  Constraints:
  1 <= coins.length <= 12
  1 <= coins[i] <= 231 - 1
  0 <= amount <= 104
**/
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    var arr = new Array(amount+1).fill(Infinity);
    arr[0] = 0;
    for(var i=1; i<=amount; i++) {
        for(var j=0; j<coins.length; j++) {
            if(i - coins[j] >=0 ) {
                arr[i] = Math.min(arr[i], arr[i-coins[j]] + 1);
            }
        }
    }
    return arr[amount] === Infinity ? -1 : arr[amount]; 
};
