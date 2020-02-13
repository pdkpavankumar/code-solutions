function sudoku2(grid) {
    var valid = true;
    for(var i=0; i<9; i++) {
        valid = findDuplicates(grid[i]);
        valid = valid && findDuplicates([grid[0][i],grid[1][i],grid[2][i],grid[3][i],grid[4][i],grid[5][i],grid[6][i],grid[7][i],grid[8][i]]);
        var left = Math.floor(i/3)*3;
        var right = i%3*3;
       valid = valid && findDuplicates([grid[left][right],grid[left+1][right],grid[left+2][right],grid[left][right+1],grid[left+1][right+1],grid[left+2][right+1],grid[left][right+2],grid[left+1][right+2],grid[left+2][right+2]]);
       console.log((i%3)*3);
        if (valid == false) {
            return false;
        }
    }
    return valid;
}
function findDuplicates(array) {
    var valid = true;
    var unique = {};
    for(var i=0; i<9; i++) {
        if(array[i] !== '.') {
            if(unique[array[i]] !== undefined) {
                valid = false;
                break;
            }
            unique[array[i]] = 1;
        }
    }
    return valid;
}
