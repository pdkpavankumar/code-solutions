/**
  Given a non-empty list of words, return the k most frequent elements.

  Your answer should be sorted by frequency from highest to lowest. If two words have the same frequency, 
  then the word with the lower alphabetical order comes first.

  Example 1:
  Input: ["i", "love", "leetcode", "i", "love", "coding"], k = 2
  Output: ["i", "love"]
  Explanation: "i" and "love" are the two most frequent words.
      Note that "i" comes before "love" due to a lower alphabetical order.
      
  Example 2:
  Input: ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], k = 4
  Output: ["the", "is", "sunny", "day"]
  Explanation: "the", "is", "sunny" and "day" are the four most frequent words,
      with the number of occurrence being 4, 3, 2 and 1 respectively.
      
  Note:
  You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
  Input words contain only lowercase letters.
  
  Follow up:
  Try to solve it in O(n log k) time and O(n) extra space.
**/
/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    var map = {};
    for(word of words) {
        if(!!map[word]) {map[word]++;}
        else {map[word] = 1;}
    }
    var entries = Object.entries(map);
    entries.sort((a,b) => b[1]-a[1] === 0 ? a[0].localeCompare(b[0]) : b[1]-a[1]);
    var result = [];
    for(var i=0; i<k; i++) {
        result.push(entries[i][0]);
    }
    return result;
};
