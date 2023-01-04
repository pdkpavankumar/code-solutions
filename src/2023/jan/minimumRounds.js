/**
 * @param {number[]} tasks
 * @return {number}
 */
var minimumRounds = function(tasks) {
    var map = {};
    var count = 0;
    for(var i=0; i<tasks.length; i++) {
        var task = tasks[i];
        map[task] = (map[task] || 0) + 1;
    }
    for(var key of Object.keys(map)) {
        var value = map[key];
        if(value == 1 ) {
            return -1;
        } else if(value % 3 == 0) {
            count += Math.floor(value / 3);
        } else {
            count += Math.floor(value / 3) + 1;
        }
    }
    return count;
};
