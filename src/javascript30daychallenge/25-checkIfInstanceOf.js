/**
 * @param {any} obj
 * @param {any} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf = function(obj, classFunction) {
    if(obj === null || obj === undefined || typeof classFunction !== 'function') {
        return false;
    }
    var method = classFunction.prototype;
    var method2 = obj.__proto__;
    while(method2 !== null) {
        if(method2 === method) return true;
        method2 = method2.__proto__;
    }
    return false;
};

/**
 * checkIfInstanceOf(new Date(), Date); // true
 */
