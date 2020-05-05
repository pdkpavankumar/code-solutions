/**
  In an alien language, surprisingly they also use english lowercase letters, but possibly in a different order. The order of the alphabet is some permutation of lowercase letters.

  Given a sequence of words written in the alien language, and the order of the alphabet, return true if and only if the given words are sorted lexicographicaly in this alien language.



  Example 1:

  Input: words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
  Output: true
  Explanation: As 'h' comes before 'l' in this language, then the sequence is sorted.
  Example 2:

  Input: words = ["word","world","row"], order = "worldabcefghijkmnpqstuvxyz"
  Output: false
  Explanation: As 'd' comes after 'l' in this language, then words[0] > words[1], hence the sequence is unsorted.
**/
/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
  
    function compare(word1, word2) {
        var length = word1.length > word2.length ? word2.length : word1.length;
        for(var i=0; i<length; i++) {
            if(word1[i] !== word2[i]) {
                if(order.indexOf(word1[i]) > order.indexOf(word2[i])) {
                    return false;
                } else {
                    return true;
                }
            }
        }       
        if(word1.length > word2.length) {
            return false;
        }
        return true;
    }
    
    for(var i=0; i< words.length-1; i++) {
        if(compare(words[i], words[i+1]) === false) {
            return false;
        }
    }
    return true;
};
