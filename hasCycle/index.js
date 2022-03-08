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
    var map = new Map()
    while(head) {
        // 如果出现重复，说明有环
        if(map.has(head)) {
            return true
        }
        // 把每个节点都放入map
        map.set(head, true)
        head = head.next
    }
    return false
};