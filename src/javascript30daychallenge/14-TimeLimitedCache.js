var TimeLimitedCache = function() {
    this.map = {};
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    var self = this;
    if(this.map[key] === undefined) {
        this.map[key] = {
            value: value,
            duration: duration,
            expried: false
        }
        var timer = setTimeout(function() {
            self.map[key].expired = true;
        }, duration);
        this.map[key].timer = timer;
        return false;
    } else {
        clearTimeout(this.map[key].timer);
        this.map[key].value = value;
        this.map[key].duration = duration;
        var timer = setTimeout(function() {
            self.map[key].expired = true;
        }, duration);
        this.map[key].timer = timer;
        if(!this.map[key].expired) {return true;}
        return false;
    }
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    if(this.map[key] !== undefined) {
        if(!this.map[key].expired) {
            return this.map[key].value;
        }
    }
    return -1;
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    return Object.values(this.map).filter(e => !e.expired).length;
};

/**
 * Your TimeLimitedCache object will be instantiated and called as such:
 * var obj = new TimeLimitedCache()
 * obj.set(1, 42, 1000); // false
 * obj.get(1) // 42
 * obj.count() // 1
 */
