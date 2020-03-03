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
    var arr = quicksort(nums, 0 , nums.length - 1);
    return arr[arr.length - k];
}

function partition(nums, start, end) {
    var pivot = nums[end];
    var pindex = start;
    for(var i=start; i<end; i++) {
        if(nums[i] <= pivot) {
            nums = swap(nums, i, pindex);
            pindex++;
        }
    }
    nums = swap(nums, pindex, end);
    return [nums, pindex];
}

function quicksort(nums, start, end) {
    if(start < end) {
        var [nums, pindex] = partition(nums, start, end);
        nums = quicksort(nums, start, pindex - 1);
        nums = quicksort(nums, pindex + 1, end);
    }
    return nums;
}

function swap(nums, i, j) {
    temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
    return nums;
}