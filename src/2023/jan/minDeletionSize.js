/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function(strs) {
    var count = 0;
    var columns = new Array(strs[0].length).fill('');
    for(var i=0; i<strs.length; i++) {
        for(var j=0; j<strs[i].length; j++) {
            columns[j]+=strs[i].charAt(j);
        }
    }
    for(var i=0; i<columns.length; i++) {
        if(columns[i] != columns[i].split("").sort().join("")) {
            count++;
        }
    }
    return count;
};
