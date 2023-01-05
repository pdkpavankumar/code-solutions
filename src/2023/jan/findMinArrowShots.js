/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    points = points.sort((a,b) => a[1]-b[1]);
    var arrow = 1;
    var end = points[0][1];
    for(var i=1; i<points.length; i++) {
        if(points[i][0] > end) {
            arrow++;
            end = points[i][1];
        }
    }
    return arrow;
};
