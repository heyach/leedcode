// 暴力破解，双循环遍历依次求和
function toSum(nums, target) {
    for(let i = 0;i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++) {
            if(nums[i] + nums[j] == target) {
                return [i, j]
            }
        }
    }
}

// 通过空间换时间，定义变量存放
function toSum(nums, target) {
    var map = {}
    for(let i = 0; i < nums.length; i++) {
        // 差值在map中存在，比如target = 9， 当前值为7，而map里已经存了一个2了，那毫无疑问解已经求得了，
        var diff = target - nums[i]
        // 这里不能这样简单判断，因为map[diff]有可能为0，所以用undefined
        if(map[diff] != undefined) {
            return [map[diff], i]
        }
        // 用map把数组的每个值和下标都存起来，这里把值作为key，可以快速判断是否存在
        map[nums[i]] = i
    }
}