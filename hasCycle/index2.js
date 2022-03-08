// 链表
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
// 链表实例
var l1 = new ListNode(3, 
            new ListNode(2, 
                new ListNode(0, 
                    new ListNode(4, null)
                )
            )
    )
var hasCycle = function(head) {
    var slow = head
    var fast = head
    while(fast && fast.next) {
        // 慢指针走1步
        slow = slow.next
        // 快指针走2步
        fast = fast.next.next

        if(slow == fast) {
            return true
        }
    }
    return false
};