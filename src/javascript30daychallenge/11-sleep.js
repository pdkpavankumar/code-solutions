/**
 * @param {number} millis
 */
async function sleep(millis) {
    var p = new Promise((resolve, reject) => {
        setTimeout(() => resolve(), millis);
    });
    
    return p; 
}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */
