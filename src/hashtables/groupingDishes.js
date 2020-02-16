 function groupingDishes(dishes) {
    var group = {};
    for(i=0; i<dishes.length; i++) {
        for(j=1; j< dishes[i].length; j++) {
            if(group[dishes[i][j]] === undefined) {
                group[dishes[i][j]] = {dishes: [dishes[i][0]]} 
            } else {
                group[dishes[i][j]].dishes.push(dishes[i][0]);
            }
        }
    }
    var result = Object.entries(group).filter((obj) => obj[1].dishes.length >= 2);
    result = result.sort((obj, obj2) => obj[0] > obj2[0] ? 1 : -1);
    var output = [];
    for(i=0; i<result.length; i++) {
        output.push([result[i][0]].concat(result[i][1].dishes.sort()));
    }
    return output;
}
