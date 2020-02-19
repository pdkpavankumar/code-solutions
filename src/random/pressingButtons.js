/**
	Given a string of digits, return all of the possible non-empty letter combinations that the number could represent. The mapping of digits to letters is the same as you would find on a telephone's buttons:
	resulting array should be sorted lexicographically.
	Example

	For buttons = "42", the output should be
	pressingButtons(buttons) = ["ga", "gb", "gc", "ha", "hb", "hc", "ia", "ib", "ic"].
**/
function pressingButtons(buttons) {
    var button = buttons.split("");
    var data = ['abc','def','ghi','jkl','mno','pqrs','tuv','wxyz'];
    var arr = [];
    for(var i=0; i<button.length; i++) {
        var num = parseInt(button[i]) - 2;
        arr.push(data[num]);
    }
    var result = [''];
    var newresult = [];
    for(var i=0; i<arr.length; i++) {
        var str = arr[i].split('');
        newresult = [];
        for(var j=0; j<str.length; j++) {
            for(var k=0; k<result.length; k++) {
                newresult.push(result[k] + str[j]);
            }
        }
        result = newresult;
    }
    
    if(result[0] == '') {
        result = [];
    }
    return result.sort();
}
