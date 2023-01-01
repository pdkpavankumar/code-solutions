/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    var map = {};
    var map2 = {};
    s=s.split(" ");
    if(s.length !== pattern.length) return false;
    for(var i=0;i<pattern.length; i++) {
        var chr = pattern.charAt(i);
        var str = s[i];
        if(map[chr] === undefined && map2[str] === undefined) {
            map[chr] = str;
            map2[str] = chr;
        } else if(map[chr] !== s[i] || map2[str] !== chr) {
            return false;
        }
    }
    return true;
};
