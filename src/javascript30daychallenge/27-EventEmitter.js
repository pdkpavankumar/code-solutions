class EventEmitter {
    constructor() {
        this.map = {}; 
    }

  subscribe(event, cb) {
      this.map[event] = this.map[event] || [];
      this.map[event].push(cb);
    return {
        unsubscribe: () => {
            this.map[event].pop();
        }
    };
  }

  emit(event, args = []) {
      var results = [];
      var cbs = this.map[event];
      if(cbs) {
          for(var i=0; i<cbs.length; i++) {
              results.push(cbs[i](...args));
          }
      }
      return results;
  }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */
