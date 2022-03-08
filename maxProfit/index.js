var maxProfit = function(prices) {
    if(!prices.length) {
        return 0
    }
    var h = prices[0]
    var r = 0
    for(let i = 1;i < prices.length;i++) {
        if(prices[i] - h > 0) {
            // 有利润了，更新最大利润，比如h更新到1的时候，遍历到5，利润为4，遍历到3的时候利润为2，取最大值
            r = Math.max(r, prices[i] - h)
        } else {
            // 更新最小值，遍历到1的时候，h=1，遍历到3的时候还是1
            h = Math.min(h, prices[i])
        }
    }
    return r
};
maxProfit([7,1,5,3,6,4])
maxProfit([7,6,4,3,1])