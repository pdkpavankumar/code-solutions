/**
	Given a 2D grid skyMap composed of '1's (clouds) and '0's (clear sky), count the number of clouds. A cloud is surrounded by clear sky, and is formed by connecting adjacent clouds horizontally or vertically. You can assume that all four edges of the skyMap are surrounded by clear sky.

	Example

	For

	skyMap = [['0', '1', '1', '0', '1'],
			  ['0', '1', '1', '1', '1'],
			  ['0', '0', '0', '0', '1'],
			  ['1', '0', '0', '1', '1']]
	the output should be
	countClouds(skyMap) = 2;

	For

	skyMap = [['0', '1', '0', '0', '1'],
			  ['1', '1', '0', '0', '0'],
			  ['0', '0', '1', '0', '1'],
			  ['0', '0', '1', '1', '0'],
			  ['1', '0', '1', '1', '0']]
	the output should be
	countClouds(skyMap) = 5.
**/

function countClouds(skyMap) {
    var num = 0;
    for(var i=0; i<skyMap.length; i++) {
        for(var j=0; j<skyMap[i].length; j++) {
            if(skyMap[i][j] == '1') {
                num++;
                skyMap = mark(skyMap, i, j);
            }
        }
    }
    return num;
}

function mark(skyMap, i, j) {
    if(i>=0 && i<skyMap.length && j>=0 && j<skyMap[i].length) {
        if(skyMap[i][j] === '1') {
            skyMap[i][j] = '0';
            skyMap = mark(skyMap, i, j + 1);
            skyMap = mark(skyMap, i, j - 1);
            skyMap = mark(skyMap, i + 1, j);
            skyMap = mark(skyMap, i - 1, j);
        }
    }
    return skyMap;
}