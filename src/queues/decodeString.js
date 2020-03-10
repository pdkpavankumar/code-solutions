/*
	Given an encoded string, return its corresponding decoded string.

	The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is repeated exactly k times. Note: k is guaranteed to be a positive integer.

	Note that your solution should have linear complexity because this is what you will be asked during an interview.

	Example

	For s = "4[ab]", the output should be
	decodeString(s) = "abababab";

	For s = "2[b3[a]]", the output should be
	decodeString(s) = "baaabaaa";

	For s = "z1[y]zzz2[abc]", the output should be
	decodeString(s) = "zyzzzabcabc".
*/
function decodeString(s) {
    var arr = [];
    var nums = [];
    var result = '';
    var multi = '';

    for(var i=0; i<s.length; i++) {
        var str = s[i];
        if(!isNaN(str)) {
            multi += str;
        } else if(str === '[') {
            nums.push(multi);
            multi = '';
            arr.push(result);
            result = '';
        } else if(str === ']') {
            result = arr.pop() + result.repeat(nums.pop());
        } else {
            result += str;
        }
    }

    return result;
}
