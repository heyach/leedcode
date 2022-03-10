
var hammingDistance = function(x, y) {
    var r = x ^ y
    r = r.toString(2)
    var count = 0
    for(var i = 0;i < r.length; i++) {
        count += r[i] == 1 ? 1 : 0
    }
    return count
};
hammingDistance(3, 4)