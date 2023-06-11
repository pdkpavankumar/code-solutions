/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = async function(functions) {
    return new Promise((resolve, reject)  => {
        var total = functions.length;
        var current = 0;
        var result = [];
        for(let i=0; i< functions.length; i++) {
            functions[i]().then(function(res) {
                result[i] = res;
                current++;
                if(current === total) {
                    resolve(result);
                }
            }).catch((e) => {
                reject(e);
            });
        }
    });
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */
