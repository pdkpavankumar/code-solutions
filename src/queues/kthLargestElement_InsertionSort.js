/**
	Note: Avoid using built-in std::nth_element (or analogous built-in functions in languages other than C++) when solving this challenge. Implement them yourself, since this is what you would be asked to do during a real interview.

	Find the kth largest element in an unsorted array. This will be the kth largest element in sorted order, not the kth distinct element.

	Example

	For nums = [7, 6, 5, 4, 3, 2, 1] and k = 2, the output should be
	kthLargestElement(nums, k) = 6;
	For nums = [99, 99] and k = 1, the output should be
	kthLargestElement(nums, k) = 99.

**/
function kthLargestElement(nums, k) {
    var arr = [];
    for(var i=0; i<nums.length; i++) {
        var index = arr.length;
        for(var j=0; j<arr.length; j++) {
            if(nums[i] > arr[j]) {
                index = j;
                break;
            }
        }
        var rest= arr.splice(index, arr.length);
        arr.push(nums[i]);
        arr = arr.concat(rest);
    }
    console.log(arr);
    return arr[k - 1];
}
