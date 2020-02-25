/**
	Spreadsheet software uses a consistent naming pattern for columns, in which the first column is named A, the second column is named B, the 27th column is named AA, the 28th is named AB, and so on.
	Given a positive integer number, return the corresponding column title as it would appear in a spreadsheet.

	Example

	For number = 27, the output should be
	columnTitle(number) = "AA";
	For number = 2, the output should be
	columnTitle(number) = "B".
**/

function columnTitle(number) {
    var result = [];
    while(number > 0) {
        var val = number % 26;
        result.unshift(String.fromCharCode((val === 0 ? 26 : val) + 64));
        if(val === 0) number--;
        number = Math.floor(number/26);
    }
    return result.join('');
}
