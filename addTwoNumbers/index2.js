// 链表
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
// 链表实例
var l1 = new ListNode(2, 
            new ListNode(4, 
                new ListNode(3, null)
            )
    )
var l2 = new ListNode(5, 
            new ListNode(6, 
                new ListNode(4, null)
            )
    )
function addTwoNumbers(l1, l2) {
    var carry = 0
    // 链的首尾，尾节点用来加节点
    var head = null
    var tail = null
    while(l1 || l2) {
        var num1 = l1 ? l1.val : 0
        var num2 = l2 ? l2.val : 0
        var sum = num1 + num2 + carry
        carry = Math.floor(sum / 10)
        // 转链， 此时链为空，head和tail都是null
        if(!head) {
            // 注意把尾加上，因为要用这个加链节点
            head = tail = new ListNode(sum % 10)
        } else {
            // 此时链表不为空，往尾部加链
            tail.next = new ListNode(sum % 10)
            tail = tail.next
        }
        // 移动l1和l2
        if(l1) {
            l1 = l1.next
        }
        if(l2) {
            l2 = l2.next
        }
    }
    // 如果最后还有进位，要加节点
    if(carry > 0) {
        tail.next = new ListNode(carry)
    }
    return head
};