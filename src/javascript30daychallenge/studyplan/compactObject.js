/**
 * @param {Object} obj
 * @return {Object}
 */
var compactObject = function(obj) {
    var helper = function(ele) {
        if (ele === null || ele === undefined || ele === false || ele === 0) {
            return;
        } else if(typeof ele === 'object' && Array.isArray(ele)) {
            var output = [];
            for(var i=0; i<ele.length; i++) {
                var result = helper(ele[i]);
                if(result) {
                    output.push(result);
                }
            }
            return output;
        } else if(typeof ele === 'object') {
            var output = {};
            Object.keys(ele).forEach(function(key) {
                var result = helper(ele[key]);
                if(result) {
                    output[key] = result;
                }
            });
            return output;
        } else {
            return ele;
        }
    };
    return helper(obj);
};
