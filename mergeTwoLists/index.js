// 链表
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
// 链表实例
var l1 = new ListNode(-10, 
            new ListNode(-6, 
                new ListNode(-6, 
                    new ListNode(-6, 
                        new ListNode(-3, 
                            new ListNode(5, null)
                        )
                    )
                )
            )
    )
var l2 = new ListNode(1, 
            new ListNode(3, 
                new ListNode(4, null)
            )
    )
function listNodeToArray(node) {
    var num = []
    while(node) {
        num.push(node.val)
        node = node.next
    }
    return num
}

function arrayToListNode(arr, index = 0) {
    // 若序号等于数组长度，说明处理完成，直接返回 null
    if(arr.length == index) {
        return null
    }
    let head = { val: arr[index], next: null }
    // 递归调用函数，剩余数组转成下一个节点
    let next = arrayToListNode(arr, ++index)
    // 将得到的下一个节点与当前节点连接
    head.next = next
    // 最后返回当前节点
    return head
}
function mergeTwoLists(l1, l2) {
    var res = listNodeToArray(l1).concat(listNodeToArray(l2)).sort((a, b) => { return a - b })
    return arrayToListNode(res)
}
mergeTwoLists(l1, l2)