function firstNotRepeatingCharacter(s) {
    var unique = {};
    for(i=0; i<s.length; i++) {
        if(unique[s[i]] === undefined) {
            unique[s[i]] = 0;
        } else {
            unique[s[i]]++;
        }
    }
    var index = Object.values(unique).indexOf(0);
    if(index === -1) {
        return '_';
    } else{
        return Object.keys(unique)[index];
    }
}
