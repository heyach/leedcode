function mergeTwoLists(l1, l2) {
    // 如果有一个为空，直接返回另一个就可以了，相当于合并完了
    if(l1 == null) {
        return l2
    }

    if(l2 == null) {
        return l1
    }
    // 递归，去掉当前首节点，把问题转成剩余链表的合并问题
    if(l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2)
        return l1
    } else {
        l2.next = mergeTwoLists(l1, l2.next)
        return l2
    }
}