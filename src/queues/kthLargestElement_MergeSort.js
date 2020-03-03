function kthLargestElement(nums, k) {
    var arr = mergeSort(nums, 0, nums.length - 1);
}

function merge(nums, start, mid, end) {
    var temp = [];
    var i = 0;
    var j = mid + 1;
    var k = 0;
    while(i<=mid && j<=end) {
        if (nums[i] <= nums[j]) {
            temp[k] = nums[i];
            i++; k++;
        } else {
            temp[k] = nums[j];
            j++; k++;
        }
    }

    while(i <= mid) {
        temp[k] = nums[i];
        i++; k++;
    }

    while(j <= end) {
        temp[k] = nums[j];
        j++; k++;
    }


}
function mergeSort(nums, start, end) {
    if(start < end) {
        var mid = Math.round((start + end )/2);
        nums = mergeSort(nums, start, mid);
        nums = mergeSort(nums, mid + 1, end);
        nums = merge(nums, start, mid, end);
    }
    return nums;
}