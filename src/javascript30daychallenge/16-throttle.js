/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var throttle = function(fn, t) {
    var timer;
    var nextExecution = new Date().getTime();
  return function(...args) {
      var self = this;
      var current = new Date().getTime();
      if(nextExecution <= current) {
          nextExecution = current + t;
          fn.apply(self, args);
      } else if(nextExecution > current){
          clearTimeout(timer);
          timer = setTimeout(function() {
              nextExecution = new Date().getTime() + t;
              fn.apply(self, args);
          }, nextExecution - current );
      }
  }
};

/**
 * const throttled = throttle(console.log, 100);
 * throttled("log"); // logged immediately.
 * throttled("log"); // logged at t=100ms.
 */
