/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    var self = this
    self.output = 0;
    return function(...args){
        if(self.output == 0) {
            self.output++;
            return fn.apply(self, args);
        }
        return undefined;
    }
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
