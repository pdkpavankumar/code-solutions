/**
Given a string, sort it in decreasing order based on the frequency of characters.

Example 1:
Input:
"tree"
Output:
"eert"
Explanation:
'e' appears twice while 'r' and 't' both appear once.
So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.

Example 2:
Input:
"cccaaa"
Output:
"cccaaa"
Explanation:
Both 'c' and 'a' appear three times, so "aaaccc" is also a valid answer.
Note that "cacaca" is incorrect, as the same characters must be together.

Example 3:
Input:
"Aabb"
Output:
"bbAa"
Explanation:
"bbaA" is also a valid answer, but "Aabb" is incorrect.

Note that 'A' and 'a' are treated as two different characters.
**/
/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    var hash = {};
    for(var i=0; i<s.length; i++) {
        if(hash[s.charAt(i)] === undefined) {
            hash[s.charAt(i)] = 1;
        } else {
            hash[s.charAt(i)]++;
        }
    }
    var entries = Object.entries(hash).sort((a, b) => b[1] - a[1]);
    var str = '';
    entries.forEach(obj => {
        str+=obj[0].repeat(obj[1]);
    });
    
    return str;
};
