var maxProfit = function(prices) {
    if(!prices.length) {
        return 0
    }
    var min = prices[0]
    var max = 0
    for(let i = 1;i < prices.length;i++) {
        if(prices[i] - min > 0) {
            // 有利润了，更新最大利润，比如h更新到1的时候，遍历到5，利润为4，遍历到3的时候利润为2，取最大值
            max = Math.max(max, prices[i] - min)
        } else {
            // 更新最小值，遍历到1的时候，h=1，遍历到3的时候还是1
            min = Math.min(min, prices[i])
        }
    }
    return max
};
maxProfit([7,1,5,3,6,4])
maxProfit([7,6,4,3,1])