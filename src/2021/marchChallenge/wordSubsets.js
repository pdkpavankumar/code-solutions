/**
  We are given two arrays A and B of words.  Each word is a string of lowercase letters.

  Now, say that word b is a subset of word a if every letter in b occurs in a, including multiplicity. 
  For example, "wrr" is a subset of "warrior", but is not a subset of "world".

  Now say a word a from A is universal if for every b in B, b is a subset of a. 

  Return a list of all universal words in A.  You can return the words in any order.

  Example 1:
  Input: A = ["amazon","apple","facebook","google","leetcode"], B = ["e","o"]
  Output: ["facebook","google","leetcode"]
  
  Example 2:
  Input: A = ["amazon","apple","facebook","google","leetcode"], B = ["l","e"]
  Output: ["apple","google","leetcode"]
  
  Example 3:
  Input: A = ["amazon","apple","facebook","google","leetcode"], B = ["e","oo"]
  Output: ["facebook","google"]
  
  Example 4:
  Input: A = ["amazon","apple","facebook","google","leetcode"], B = ["lo","eo"]
  Output: ["google","leetcode"]
  
  Example 5:
  Input: A = ["amazon","apple","facebook","google","leetcode"], B = ["ec","oc","ceo"]
  Output: ["facebook","leetcode"]

  Note:
  1 <= A.length, B.length <= 10000
  1 <= A[i].length, B[i].length <= 10
  A[i] and B[i] consist only of lowercase letters.
  All words in A[i] are unique: there isn't i != j with A[i] == A[j].
**/
/**
 * @param {string[]} A
 * @param {string[]} B
 * @return {string[]}
 */
var wordSubsets = function(A, B) {
    var merged = B.map((str) => {
        var arr = new Array(26).fill(0);
        for(var i=0; i<str.length; i++) {
            arr[str.charCodeAt(i)-97]++;
        }
        return arr;
    }).reduce((acc, curr) => {
        return acc.map((cnt, index) => {
             return Math.max(cnt, curr[index]);
        });
    });
    return A.filter((str) => {
        var arr1 = new Array(26).fill(0);
        for(var i=0; i<str.length; i++) {
            arr1[str.charCodeAt(i) - 97]++;
        }
        for(var i=0; i<arr1.length; i++) {
            if(merged[i] > arr1[i]) {return false;}
        }
        return true;
    });
};
