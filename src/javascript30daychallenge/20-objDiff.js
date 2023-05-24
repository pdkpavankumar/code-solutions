/**
 * @param {object} obj1
 * @param {object} obj2
 * @return {object}
 */
function objDiff(obj1, obj2) {
    var helper = function(o1, o2) {
        if(typeof o1 === "object" && typeof o2 === "object" && (Array.isArray(o1) === Array.isArray(o2))) {
             var keys = Object.keys(o1);
             var map = {};
             for(var i=0; i<keys.length; i++) {
                 var key = keys[i];
                 if(o2[key] !== undefined) {
                     var diff = helper(o1[key], o2[key]);
                     if(Object.keys(diff).length > 0) {
                         map[key] = diff;
                     }
                 }
             }
         } else if(o1 === o2) {
             return {};
         }  else {
             return [o1, o2];
         }
         return map;
    }
    return helper(obj1, obj2);
};
