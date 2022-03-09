var findDisappearedNumbers = function(nums) {
    var res = []
    for(let i = 1;i <= nums.length;i++) {
        // 如果这个数不在数组里，那肯定就是符合条件的元素，放入res
        if(!nums.includes(i)) {
            res.push(i)
        }
    }
    return res
};