/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var hasAllCodes = function(s, k) {
    var arr = ['0', '1'];
    for(var i=1; i < k; i++) {
        var parray = [...arr];
        arr = [];
        parray.forEach((ele) => {
           arr = [...arr, ele+'0', ele+'1' ];
        });
    }
    for(var i=0; i<arr.length; i++) {
        if(s.indexOf(arr[i]) === -1) {
            return false;
        }
    }
    return true;
};
