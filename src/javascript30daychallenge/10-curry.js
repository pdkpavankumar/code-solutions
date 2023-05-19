/**
 * @param {Function} fn
 * @return {Function}
 */
var curry = function(fn) {
    var totalArgs = [];
    return function curried(...args) {
        totalArgs = [...totalArgs, ...args]
         if(totalArgs.length===fn.length) {
            return fn(...totalArgs);
         } else {
            return curried;
         }
    };
};

/**
 * function sum(a, b) { return a + b; }
 * const csum = curry(sum);
 * csum(1)(2) // 3
 */
