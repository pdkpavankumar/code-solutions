/**
  Given an array w of positive integers, where w[i] describes the weight of index i, 
  write a function pickIndex which randomly picks an index in proportion to its weight.

  Note:
  1 <= w.length <= 10000
  1 <= w[i] <= 10^5
  pickIndex will be called at most 10000 times.
  
  Example 1:
  Input: 
  ["Solution","pickIndex"]
  [[[1]],[]]
  Output: [null,0]
 
  Example 2:
  Input: 
  ["Solution","pickIndex","pickIndex","pickIndex","pickIndex","pickIndex"]
  [[[1,3]],[],[],[],[],[]]
  Output: [null,0,1,1,1,0]
  Explanation of Input Syntax:

  The input is two lists: the subroutines called and their arguments. Solution's constructor has one argument, the array w. pickIndex has no arguments. Arguments are always wrapped with a list, even if there aren't any.


**/
/**
 * @param {number[]} w
 */
var Solution = function(w) {
  this.weights = new Map();
  this.sum=0;
  for (let i=0; i<w.length; i++) {
    this.sum += w[i];
    this.weights.set(this.sum, i);
  }
};

/**
 * @return {number}
 */

Solution.prototype.pickIndex = function() {
  let index = Math.floor(Math.random() * this.sum);
  for (let key of this.weights.keys())
    if (index<key) return this.weights.get(key)
};
/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */
