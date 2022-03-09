// 链表
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
// 链表实例
var l1 = new ListNode(1, 
            new ListNode(2, 
                new ListNode(3, 
                    new ListNode(3, 
                        new ListNode(2, 
                            new ListNode(1, null)
                        )
                    )
                )
            )
    )
var isPalindrome = function(head) {
    var arr = []
    // 把链表拍平
    while(head) {
        arr.push(head.val)
        head = head.next
    }
    // [1, 2, 3, 3, 2, 1]
    // 双指针判断是否回文数组
    var l = 0, r = arr.length - 1
    while(l <= r) {
        if(arr[l] != arr[r]) {
            return false
        } else {
            l++
            r--
        }
    }
    return true
};
isPalindrome(l1)