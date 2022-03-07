// 链表
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
// 链表实例
var l1 = new ListNode(4, 
            new ListNode(1, 
                new ListNode(8, 
                    new ListNode(4, 
                        new ListNode(5, null)
                    )
                )
            )
    )
var l2 = new ListNode(5, 
            new ListNode(6, 
                new ListNode(1, 
                    new ListNode(8, 
                        new ListNode(4, 
                            new ListNode(5, null)
                        )
                    )
                )
            )
    )
function getIntersectionNode(headA, headB) {
    // 空链表不相交
    if(headA == null || headB == null) {
        return null
    }
    let pa = headA, pb = headB
    // 交叉遍历后，两个指针会重叠在第一个相交的点
    while(JSON.stringify(pa) != JSON.stringify(pb)) {
        if(pa == null) {
            // a遍历完了去遍历b
            pa = headB
        } else {
            pa = pa.next
        }
        if(pb == null) {
            // b遍历完了，去遍历a
            pb = headA
        } else {
            pb = pb.next
        }
    }
    console.log(pa)
    return pa
}
getIntersectionNode(l1, l2)
// 第一个相交的点是1
// {
//     "val": 1,
//     "next": {
//         "val": 8,
//         "next": {
//             "val": 4,
//             "next": {
//                 "val": 5,
//                 "next": null
//             }
//         }
//     }
// }