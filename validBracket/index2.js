var isValid = function(s) {
    // 奇数肯定不匹配
    if(s.length % 2 != 0) {
        return false
    }
    var stack = []
    for(var i = 0;i < s.length;i++){
        switch (s[i]) {
            // 左括号直接入栈
            case "(":
            case "[":
            case "{":
                stack.push(s[i])
                break
            case ")":
                // 出现右括号时，前面如果不是匹配的，直接挂，依次把匹配的子串弹出去，直至完成
                if(stack.pop() != "(") return false
                break
            case "]":
                if(stack.pop() != "[") return false
                break
            case "}":
                if(stack.pop() != "{") return false
                break
        } 
    }
    return !stack.length
};
isValid("()")