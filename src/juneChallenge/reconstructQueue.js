/**
  Suppose you have a random list of people standing in a queue. Each person is described by a pair of integers (h, k),
  where h is the height of the person and k is the number of people in front of this person who have a height greater than or equal to h. 
  Write an algorithm to reconstruct the queue.

  Note:
  The number of people is less than 1,100.

  Example
  Input:
  [[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]]
  Output:
  [[5,0], [7,0], [5,2], [6,1], [4,4], [7,1]]
**/
/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
    people.sort((a,b) => (a[1] - b[1] === 0 ? a[0] - b[0] : a[1] - b[1]));
    var arr = [];
    for(var i = 0; i<people.length; i++) {
        var pep = people[i];
        if(arr.length === 0) {arr.push(pep);}
        else {
            var count = 0;
            var index = null;
            for(var j=0; j<arr.length; j++) {
                if(count === pep[1]) {
                    if(arr[j][0] < pep[0]) {continue;}
                    else { index = j - 1; break;}
                } else if(arr[j][0] >= pep[0]) {
                    count++;
                }
            }
            if(index === null) {
                arr.push(pep);
            } else if(index === -1) {
                arr = arr.unshift(pep);
            } else {
                var rem = arr.splice(index + 1, arr.length - index - 1);
                arr.push(pep);
                arr = arr.concat(rem);
            }
        }
    }
    return arr;
};
