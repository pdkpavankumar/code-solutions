/**
	You have two arrays of strings, words and parts. Return an array that contains the strings from words, modified so that any occurrences of the substrings from parts are surrounded by square brackets [], following these guidelines:

	If several parts substrings occur in one string in words, choose the longest one. If there is still more than one such part, then choose the one that appears first in the string.

	Example

	For words = ["Apple", "Melon", "Orange", "Watermelon"] and parts = ["a", "mel", "lon", "el", "An"], the output should be
	findSubstrings(words, parts) = ["Apple", "Me[lon]", "Or[a]nge", "Water[mel]on"].

	While "Watermelon" contains three substrings from the parts array, "a", "mel", and "lon", "mel" is the longest substring that appears first in the string.
	
	Reference: https://github.com/aaronbruckner/codeChallenges/blob/master/codeFights/interviewPractice/treesBasic7findSubstring.js
	

 **/

function findSubstrings(words, parts) {
     let partsTree = buildPartsTree(parts);
    let result = [];
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let partI = -1, partLen = 0;
        for (let j = 0; j < word.length; j++) {
            let length = searchPartsTree(word.slice(j), partsTree);
            if (length > partLen) {
                partLen = length;
                partI = j;
            }
        }

        if (partI !== -1) {
            word = `${word.slice(0, partI)}[${word.slice(partI, partI + partLen)}]${word.slice(partI + partLen)}`;
        }
        result.push(word);
    }

    return result;
}

function searchPartsTree(string, node) {
    let longestLength = 0;
    for (let i = 0; i < string.length; i++) {
        let char = string.charAt(i);
        if (!node.letters[char]) {
            break;
        }
        node = node.letters[char];
        if (node.terminator) {
            longestLength = i + 1;
        }
    }
    return longestLength;
}

class Node {
    constructor() {
        this.letters = {};
        this.terminator = false;
    }
}

function buildPartsTree(parts) {
    let root = new Node();
    parts.forEach((part) => {
        let node = root;
        for (let i = 0; i < part.length; i++) {
            let char = part.charAt(i);
            if (!node.letters[char]){
                node.letters[char] = new Node();
            }
            node = node.letters[char];
        }
        node.terminator = true;
    });
    return root;
}