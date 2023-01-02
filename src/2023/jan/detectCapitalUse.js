/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    return word.length > 0 && word.toUpperCase() == word ||
            word.toLowerCase() == word ||
            word[0] + word.slice(1,word.length).toLowerCase() == word;
};
