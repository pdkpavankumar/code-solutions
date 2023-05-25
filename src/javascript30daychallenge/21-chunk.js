/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function(arr, size) {
    var newArr = [];
    for(var i=0; i<arr.length; ) {
        if(i+size<arr.length) {
            newArr.push(arr.slice(i, i+size));
            i+=size;
        } else if(i+size >= arr.length) {
            newArr.push(arr.slice(i, arr.length));
            i=arr.length;
        }
    }
    return newArr;
};
