function climbStairs(n) {
    if(n == 1) {
        return 1
    }
    if(n == 2) {
        return 2
    }
    var a = 1 // n-1步的结果
    var b = 2 // n-2步的结果
    var c = 0 // 第n步的结果
    for(let i = 3;i < n;i++){
        c = a + b // 求和
        a = b // 更新n-1
        b = c // 更新n-2
    }
    return c
}