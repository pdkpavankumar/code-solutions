/**
 * @param {any} object
 * @return {string}
 */
var jsonStringify = function(object) {
    var helper = function(obj) {
        var str = "";
        if(typeof obj === "object" && obj !== null && !Array.isArray(obj)) {
            str += "{";
            var keys = Object.keys(obj);
            var arr = [];
            for(var i=0; i<keys.length; i++) {
                var value = obj[keys[i]];
                arr.push(`"${keys[i]}":` + helper(value));
            }
            str += arr.join(",") + "}";
            return str;
        } else if (typeof obj !== "object") {
            if(typeof obj === "string") {
                return `"${obj}"`;
            } else {
                return obj;
            }
        } else if(obj === null){
            return `null`;
        } else if(Array.isArray(obj)) {
            var str1 = "";
            str1 += `[`;
            var arr = [];
            for(var i=0; i<obj.length; i++) {
                arr.push(helper(obj[i]));
            }
            str1 += arr.join(",") + "]";
            return str1;
        } else {
            return helper(value);
        }
        return str;
    };
    return helper(object);
};
