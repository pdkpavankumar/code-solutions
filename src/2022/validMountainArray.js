/**
  Given an array of integers arr, return true if and only if it is a valid mountain array.

  Recall that arr is a mountain array if and only if:

  arr.length >= 3
  There exists some i with 0 < i < arr.length - 1 such that:
  arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
  arr[i] > arr[i + 1] > ... > arr[arr.length - 1]
**/
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    //valid mountain should have atleast 3 nodes
    if(arr.length < 3) return false;
    var foundPeak = false;
    //check initial pattern
    if(arr[0] > arr[1]) return false;
    for(var i=1; i<arr.length; i++) {
        //traverse and find peak
        if(foundPeak === false) {
            if(arr[i] > arr[i-1]) continue;
            else {
                foundPeak = true;
                i--;
            }
        } else {
            if(arr[i] < arr[i-1]) continue;
            else return false;
        }
    }
    return foundPeak;
};
