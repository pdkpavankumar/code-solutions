/**
 * @param {Function[]} functions
 * @param {number} n
 * @return {Function}
 */
var promisePool = async function(functions, n) {
    return new Promise((resolve, reject) => {
        var current = 0;
        var i = 0;
        var helper = function() {
            if(current >= functions.length) {
                if(i===0) {
                    resolve();
                }
                return;
            }
            while(i<n && current<functions.length) {
                i++;
                functions[current]().then(() => {i--; helper();});
                current++;
            }  
        }
        helper();
    });
};

/**
 * const sleep = (t) => new Promise(res => setTimeout(res, t));
 * promisePool([() => sleep(500), () => sleep(400)], 1)
 *   .then(console.log) // After 900ms
 */
