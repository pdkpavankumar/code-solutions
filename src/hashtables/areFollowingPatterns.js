function areFollowingPatterns(strings, patterns) {
    var stringMap = {};
    var patternMap = {};
    for(var i=0; i<patterns.length; i++) {
        if(!stringMap[patterns[i]] && !patternMap[strings[i]]) {
            stringMap[patterns[i]] = strings[i];
            patternMap[strings[i]] = patterns[i]
        } else {
            if(stringMap[patterns[i]] !== strings[i] && patternMap[strings[i]] !== patterns[i]) {
                return false;
            }
        }
    }
    return true;
}
