/**
 * @param {Array} arr
 * @return {Generator}
 */
var inorderTraversal = function*(arr) {
    var flat = [];
    var helper = function(a) {
        if(Array.isArray(a)) {
            for(var i=0; i<a.length; i++) {
                helper(a[i]);
            }
        } else {
            flat.push(a);
        }
    };
    helper(arr);
    for(var i=0; i<flat.length; i++) {
        yield(flat[i]);
    }
};

/**
 * const gen = inorderTraversal([1, [2, 3]]);
 * gen.next().value; // 1
 * gen.next().value; // 2
 * gen.next().value; // 3
 */
