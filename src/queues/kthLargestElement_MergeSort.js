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
    var arr = mergeSort(nums, 0, nums.length-1);
    return arr[arr.length - k];
}

function merge(nums, start, mid, end) {
    var arr = [];
    var i = start;
    var j = mid+1;
    while(i<=mid && j<=end) {
        if(nums[i] < nums[j]) {
            arr.push(nums[i]);
            i++;
        } else {
            arr.push(nums[j]);
            j++;
        }
    }
    while(i<=mid) {
        arr.push(nums[i]);
        i++;
    }
    while(j<=end) {
        arr.push(nums[j]);
        j++
    }
    for(var i=0; i<arr.length; i++) {
        nums[start++] = arr[i];
    }
    return nums;
}

function mergeSort(nums, start, end) {
    if(start < end) {
        var mid = Math.floor((start+end)/2);
        mergeSort(nums, start, mid);
        mergeSort(nums, mid+1, end);
        nums = merge(nums, start, mid, end);
        return nums;
    }
    return nums;
}
