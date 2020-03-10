/**
	Note: Write a solution with O(operations.length) complexity, since this is what you would be asked to do during a real interview.

	Implement a modified stack that, in addition to using push and pop operations, allows you to find the current minimum element in the stack by using a min operation.

	Example

	For operations = ["push 10", "min", "push 5", "min", "push 8", "min", "pop", "min", "pop", "min"], the output should be
	minimumOnStack(operations) = [10, 5, 5, 5, 10].

	The operations array contains 5 instances of the min operation. The results array contains 5 numbers, each representing the minimum element in the stack at the moment when min was called.
**/
function minimumOnStack(operations) {
    var arr = [];
    var result = [];
    for(var i=0; i<operations.length; i++) {
        if (operations[i] === 'min') {
            result.push(Math.min(...arr));
        } else {
            var parse = operations[i].split(" ");
            if (parse[0] === 'push') {
                arr.push(parseInt(parse[1]));
            } else {
                arr.pop();
            }
        }
    }
    return result;
}
