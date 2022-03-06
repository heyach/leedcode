function moveZeroes(nums) {
    var l = 0, r = -1;
    while(r < nums.length) {
        // r直接遍历
        r++
        if(nums[r]) {
            if(nums[l] == 0) {
                //  r不为0，l为0的话一定要交换了，所以l也要动
                [nums[l], nums[r]] = [nums[r], nums[l]]
            } 
            // r如果为0，是不用动l的，l始终指向第一个0
            // 如果一开始l指向的就不是0，l也要移动的
            // 而如果r不为0，l为0，要进行交换，l也是要移动的
            l++
        }
    }
    console.log(nums)
}
moveZeroes([1, 0, 1, 0, 3, 12])