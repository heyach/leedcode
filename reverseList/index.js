// 链表
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
// 链表实例
var l1 = new ListNode(10, 
            new ListNode(6, 
                new ListNode(7, 
                    new ListNode(3, 
                        new ListNode(5, null)
                    )
                )
            )
    )
// 10 6 7 3 5 null
// 5 3 7 6 10 null
function reverseList(head) {
    let prev = null;
    let curNode = head;
    while (curNode) {
        // 每次遍历（移动节点，设置新next，设置下一个新next）
        // 确定好当前节点的新next（用prev表示），由于反转的特点，当前节点的新next一定是当前节点的前一个节点，或者说，当前节点一定是下一个节点的新next
        const next = curNode.next;
        // 由于前一次遍历已经得到prev，直接赋值
        curNode.next = prev;
        // 当前节点一定是下一个节点的新next，存到prev中
        prev = curNode;
        // 设置当前节点继续遍历，10 6 7 ... 所以curNode = curNode.next
        curNode = next;
    }
    return prev;
}
reverseList(l1)
// {
//     "val": 5,
//     "next": {
//         "val": 3,
//         "next": {
//             "val": 7,
//             "next": {
//                 "val": 6,
//                 "next": {
//                     "val": 10,
//                     "next": null
//                 }
//             }
//         }
//     }
// }