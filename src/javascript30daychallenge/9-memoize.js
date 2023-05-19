/**
 * @param {Function} fn
 */
function memoize(fn) {
    var result = {};
    return function(...args) {
        if(result[args] !== undefined) {
            return result[args];
        } else {
            result[args] = fn(...args);
        }
        return result[args];
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */
