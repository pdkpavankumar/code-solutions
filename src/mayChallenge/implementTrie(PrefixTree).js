/**
  Implement a trie with insert, search, and startsWith methods.

  Example:
  Trie trie = new Trie();
  trie.insert("apple");
  trie.search("apple");   // returns true
  trie.search("app");     // returns false
  trie.startsWith("app"); // returns true
  trie.insert("app");   
  trie.search("app");     // returns true
  
  Note:
  You may assume that all inputs are consist of lowercase letters a-z.
  All inputs are guaranteed to be non-empty strings.
**/
/**
 * Initialize your data structure here.
 */
var Trie = function() {
    this.root = {values:[]};
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    word = word.split("");
    var node = this.root;
    for(var i=0; i<word.length; i++) {
        if(node.values.indexOf(word[i]) === -1) {
            node.values.push(word[i]);
            node[word[i]] = {values: []};
        }
        node = node[word[i]];
    }
    node.end = true;
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    word = word.split("");
    var node = this.root;
    for(var i=0; i<word.length; i++) {
        if(node.values.indexOf(word[i]) === -1) {return false;}
        else {
            node = node[word[i]];
        }
    }
    return node.end === true;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    prefix = prefix.split("");
    var node = this.root;
    for(var i=0; i<prefix.length; i++) {
        if(node.values.indexOf(prefix[i]) === -1) {return false;}
        else {
            node = node[prefix[i]];
        }
    }
    return true;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
