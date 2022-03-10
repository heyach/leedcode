function countOne(n) {
    n = n.toString(2)
    var count = 0
    for(var i = 0;i < n.length; i++) {
        count += n[i] == 1 ? 1 : 0
    }
    return count
}
var countBits = function(n) {
    var res = []
    for(var i = 0;i <= n; i++) {
        res.push(countOne(i))
    }
    return res
};
countBits(8)