function firstDuplicate(a) {
    var temp = {};
    for(i=0; i<a.length; i++) {
        if (temp[a[i]] === undefined) {
            temp[a[i]] = 'gotit';
        } else {
            return a[i];
        }
    }
    return -1;
}
