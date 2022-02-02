/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    var res = [];
    var map = {};
    var len = p.length;
    var start = 0;
    var end = 0;
    p.split("").forEach(el => map[el] = (map[el]||0) + 1);
    console.log(map);
    while(end < s.length) {
        var endChar = s.charAt(end);
        map[endChar] > 0 && len--;
        map[endChar]--;
        end++;
        len === 0 && res.push(start);
        if(end - start === p.length) {
            var startChar = s.charAt(start);
            map[startChar] >= 0 && len++;
            map[startChar]++;
            start++;
        }
    }
    return res;
};
