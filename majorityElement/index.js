var majorityElement = function(nums) {
    var count = 0
    var num = ""
    for(var i = 0;i < nums.length;i++) {
        // 如果count为0，说明遍历到i之前，众数和其他数持平了，再重新去假定众数
        if(count == 0) {
            num = nums[i]
        }
        // 如果i与众数相等count加1，否则是其他数，count减1
        count += nums[i] == num ? 1 : -1
    }
    return num
};