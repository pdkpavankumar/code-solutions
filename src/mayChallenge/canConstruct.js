/**
  Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.

  Each letter in the magazine string can only be used once in your ransom note.

  Note:
  You may assume that both strings contain only lowercase letters.

  canConstruct("a", "b") -> false
  canConstruct("aa", "ab") -> false
  canConstruct("aa", "aab") -> true
**/
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    ransomNote = ransomNote.split("");
    for(var i=0; i < ransomNote.length; i++) {
        if (magazine.indexOf(ransomNote[i]) !== -1) {
           magazine = magazine.replace(ransomNote[i], "");
        } else {
            return false;
        }
    }
    return true;
};
