/**
 * @param {any[]} arr
 * @param {number} depth
 * @return {any[]}
 */
var flat = function (arr, n) {
    var arr1 = [];
    var helper = function(arr2, level, n) {
        if(level < n) {
            for(var j=0; j<arr2.length; j++) {
                if(Array.isArray(arr2[j])) {
                    helper(arr2[j], level+1, n);
                } else {
                    arr1.push(arr2[j]);
                }
            }
        } else {
            arr1.push(arr2);
        }
        
    }
    for(var i=0; i<arr.length; i++) {
        if(Array.isArray(arr[i])) {
            helper(arr[i], 0, n);
        } else {
            arr1.push(arr[i]);
        }
    }
    return arr1;
};
