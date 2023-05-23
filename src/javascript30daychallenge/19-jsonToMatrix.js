/**
 * @param {Array} arr
 * @return {Matrix}
 */
var jsonToMatrix = function(arr) {
    var newArr = [];
    var map = {};
    var allKeys = {};
    var helper = function(obj, key, m) {
        if(typeof obj === "object" && obj !== null && !Array.isArray(obj)) {
            var keys = Object.keys(obj);
            for(var i=0; i<keys.length; i++) {
                if(key !== "" && key.charAt(key.length - 1) !== ".") {
                    helper(obj[keys[i]], key+"."+keys[i], m);
                } else {
                    helper(obj[keys[i]], key+keys[i], m);
                }
            }
            return m;
        } else if(obj === null) {
            allKeys[key] = 1; 
            m[key] = null;
        } else if(Array.isArray(obj)) {
            for(var i=0; i<obj.length; i++) {
                if(key!== "") {
                    helper(obj[i], key+"."+i, m);
                } else {
                    helper(obj[i], i+key, m);
                }
                
            }
        } else {
            allKeys[key] = 1;
            m[key] = obj;
        }
        return m;
    };

    for(var i=0; i<arr.length; i++) {
        var obj = arr[i];
        map[i] = helper(obj, "", {});
    }
    var keys = Object.keys(allKeys).sort();
    newArr.push(keys);
    var rows = Object.keys(map);
    for(var i=0; i<rows.length; i++) {
        var newarr2 = [];
        for(var j=0; j<keys.length; j++) {
            newarr2.push(map[i][keys[j]] === undefined ? "" : map[i][keys[j]]);
        }
        newArr.push(newarr2);
    }
    return newArr;
};
