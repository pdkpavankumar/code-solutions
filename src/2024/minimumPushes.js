/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function(word) {
    var map = {};
    word = word.split("");
    word.map((e) => {
        map[e] = (map[e] || 0) + 1;
    });
    var chars = Object.entries(map).sort((a, b) =>b[1] - a[1]).map(e=>e[0]);
    var min = 0;
    console.log({chars});
    for(var i=0; i<chars.length; i++) {
        min+= (Math.floor((i)/8) + 1) * map[chars[i]];
        console.log(min);
    }
    return min;
};
