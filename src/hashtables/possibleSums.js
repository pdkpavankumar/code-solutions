function possibleSums(coins, quantity) {
    var sum = {0: 1};
    coins.map((coin, index) => {
        var sumarray = Object.keys(sum).map((obj) => parseInt(obj));
        sumarray.map((obj) => {
            for(i=1; i<=quantity[index]; i++) {
                sum[coin * i + obj] = 1;
            }
        });
    });
    return Object.keys(sum).length - 1;
}
