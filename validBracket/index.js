var isValid = function(s) {
    // 奇数肯定不匹配
    if(s.length % 2 != 0) {
        return false
    }
    var tmp = -1, f = true
    while(s.length && f) {
        // 因为只有括号，匹配的最小部分依次去掉，能去完就是匹配的
        var hua = s.indexOf("{}")
        if(hua != -1){
            s = s.slice(0, hua) + s.slice(hua + 2)
        }
        var zhong = s.indexOf("[]")
        if(zhong != -1){
            s = s.slice(0, zhong) + s.slice(zhong + 2)
        }
        var yuan = s.indexOf("()")
        if(yuan != -1){
            s = s.slice(0, yuan) + s.slice(yuan + 2)
        }
        // 如果tmp和s一样了，说明一个匹配的也找不到了，但s长度还有，说明不匹配
        if(s == tmp) {
            f = false
        }
        tmp = s
    }
    return f
};
isValid("()")