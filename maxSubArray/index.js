
    if(!nums.length) {
        return
    }
    let max_end_here = nums[0]
    let max_now = nums[0]
    for(let i = 1; i < nums.length; i++) {
        // 以nums[i]为终点，得出到i为止的最大序列和
        max_end_here = Math.max(nums[i], max_end_here + nums[i])
        // 与最终的最大值比较，始终更新最大值
        max_now = Math.max(max_now, max_end_here)
        console.log(max_end_here, max_now)
    }
    return max_now