/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function(costs, coins) {
    var total = 0;
    costs = costs.sort((a,b) => a-b);
    for(var i=0; i<costs.length; i++) {
        if(coins>=costs[i]) {
            coins = coins-costs[i];
            total++;
        } else {
            break;
        }
    }
    return total;
};
