/**
 * @return {Generator<number>}
 */
var fibGenerator = function*() {
    let f1 = 0;
    let f2 = 1;
    yield f1;
    yield f2;
    while(true) {
        let result = f1 + f2;
        yield result;
        f1 = f2;
        f2 = result;
    }
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */
