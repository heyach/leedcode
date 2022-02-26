function lengthOfLongestSubstring(s) {
    // 定义左右指针
    var l = r = 0
    // 最长
    var long = 0
    // 用map来判断字符是否重复和存储index
    var map = new Map(), len = s.length;
    for(; r < len; r++){
        // 判断r > l 是因为
        if(map.has(s[r]) && map.get(s[r]) >= l){
            l = map.get(s[r]) + 1;
        }
        // 要比较较大值，因为r和l有可能重复，而之前的long是最大的，比如abb
        long = Math.max(long, r - l + 1);
        // 右指针不重置，一直移动且记录字符index
        map.set(s[r], r);
    }
    return long;
}
lengthOfLongestSubstring("abba")