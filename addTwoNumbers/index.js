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
// 把链表转成数
function getNodeValue(listNode) {
    var num = 0
    var res = 0
    function getNumber(node) {
        res += node.val * Math.pow(10, num)
        if(node.next) {
            num++
            getNumber(node.next)
        }
    }
    getNumber(listNode)
    return res
}
// 把数转成链表
function numberToListNode(num) {
    num = String(num).split("").reverse()
    var list = []
    for(let i = 0;i < num.length;i++){
        list[i] = new ListNode(Number(num[i]), null)
    }
    for(let i = 0;i < list.length;i++) {
        list[i].next = list[i + 1] ? list[i + 1] : null
    }
    return list[0]
}
// 相加
function addTwoNumbers(l1, l2) {
    var num1 = getNodeValue(l1)
    var num2 = getNodeValue(l2)
    var sum = num1 + num2
    // 将结果转成链表
    var a = numberToListNode(sum)
    return a
};
addTwoNumbers(l1, l2)
/*
{
    "val": 7,
    "next": {
        "val": 0,
        "next": {
            "val": 8,
            "next": null
        }
    }
}
*/