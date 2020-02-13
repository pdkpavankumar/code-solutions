function rotateImage(a) {
    var length = a.length;
    var b = [];
    for(i=0; i<length; i++) {
        var c = [];
        for(j=0; j<length;j++) {
            c.push(a[length-j-1][i]);
        }
        b.push(c);
    }
    return b;
}
