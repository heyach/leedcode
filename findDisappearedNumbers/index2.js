var findDisappearedNumbers = function(nums) {
    var res = new Array(nums.length)
    for(let i = 0;i < nums.length;i++) {
        res[nums[i] - 1] = true
    }
    
};
findDisappearedNumbers([4,3,2,7,8,2,3,1])
//  [0, 1, 2, 3, empty × 2, 6, 7] 得出[5, 6]