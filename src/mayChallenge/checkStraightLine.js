/**
  You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. Check if these points make a straight line in the XY plane.

  Example 1:
  Input: coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]
  Output: true
  
  Example 2:
  Input: coordinates = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]
  Output: false

  Constraints:
  2 <= coordinates.length <= 1000
  coordinates[i].length == 2
  -10^4 <= coordinates[i][0], coordinates[i][1] <= 10^4
  coordinates contains no duplicate point.
**/
/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
    if(coordinates.length<=1) {return true;}
    var originDiff = [coordinates[0][0]  - coordinates[1][0], coordinates[0][1] - coordinates[1][1]];
    for(var i=2; i < coordinates.length; i++) {
        var coordinate = coordinates[i];
        diffX = coordinates[0][0] - coordinate[0];
        diffY = coordinates[0][1] - coordinate[1];
        if(diffX !==0 && diffY !==0) {
            if(originDiff[0]/diffX !== originDiff[1]/diffY) {
                return false;
            }    
        }
        
    }
    return true;
};
