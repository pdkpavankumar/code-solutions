/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    var map = {};
    for(var i=0; i<arr1.length; i++) {
        map[arr1[i].id] = arr1[i];
    }
    for(var j=0; j<arr2.length; j++) {
        if(map[arr2[j].id] === undefined) {
            map[arr2[j].id] = arr2[j]
        } else {
            Object.keys(arr2[j]).forEach(function(key) {
                map[arr2[j].id][key] = arr2[j][key];
            });
        }
    }
    return Object.entries(map).sort(([key, value],[key1, value1]) => key-key1).map(([a,b]) => b);

};
