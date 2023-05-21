/**
 * @param {any} o1
 * @param {any} o2
 * @return {boolean}
 */
var areDeeplyEqual = function(o1, o2) {
    var isEqual = true;
    var helper = function(val1, val2) {
        if(typeof val1 === typeof val2){
            if(typeof val1 !== 'object') {
                if(val1 !== val2){
                    isEqual = false;
                    return isEqual;
                } else {
                    return true;
                }
            } else {
                if(Array.isArray(val1) && Array.isArray(val2)) {
                    if(val1.length === val2.length) {
                        for(var i=0; i<val1.length; i++) {
                            if(!helper(val1[i], val2[i])) {
                                isEqual = false;
                                return  false;
                            }
                        }
                        return true;
                    } else {
                        isEqual = false;
                        return isEqual;
                    }
                } else if(val1 !== null && !Array.isArray(val1) && !Array.isArray(val2)){
                    var keys = Object.keys(val1);
                    if(keys.length === Object.keys(val2).length) {
                        for(var i=0; i<keys.length ; i++) {
                            if(val2[keys[i]] !== undefined) {
                                if(!helper(val1[keys[i]], val2[keys[i]])) {
                                    isEqual = false;
                                    return isEqual;
                                }
                            } else {
                                isEqual = false;
                                return isEqual;
                            }
                        }
                        return true;
                    }
                } else {
                    isEqual = val1 === val2;
                    return isEqual;
                }
            }
        } else {
            return false;
        }
        return isEqual;
    }
    return helper(o1, o2);
};
