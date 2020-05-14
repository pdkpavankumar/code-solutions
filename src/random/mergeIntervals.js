/**
  Given a collection of intervals, merge all overlapping intervals.

  Example 1:
  Input: [[1,3],[2,6],[8,10],[15,18]]
  Output: [[1,6],[8,10],[15,18]]
  Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
  
  Example 2:
  Input: [[1,4],[4,5]]
  Output: [[1,5]]
  Explanation: Intervals [1,4] and [4,5] are considered overlapping.
**/
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if(intervals.length <= 1 ) {return intervals;}
    intervals = intervals.sort((a,b) => a[0] - b[0]);
    var resultIntervals = [];
    var prevInterval = intervals[0];
    for(var i=1; i<intervals.length; i++) {
        var currentInterval = intervals[i];
        if(prevInterval[1] >= currentInterval[0]) {
            prevInterval = [Math.min(prevInterval[0], currentInterval[0]), Math.max(currentInterval[1], prevInterval[1])];
        } else {
            resultIntervals.push(prevInterval);
            prevInterval = currentInterval;
        }
    }
    resultIntervals.push(prevInterval);
    return resultIntervals;
};
