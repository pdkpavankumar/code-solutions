function containsCloseNums(nums, k) {
    for(var i=0; i<nums.length-1; i++) {
        for(var j=i+1; j<nums.length; j++) {
            if(nums[i] === nums[j]) {
                if (j-i <= k) {
                    return true;
                }
            }
        }
    }
    return false;
}
