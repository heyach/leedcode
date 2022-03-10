### leedcode
算法题练习，锻炼一下脑瓜子

### 常见的数据结构
* 数组Array
* 链表
* 二叉树（每个节点最多2个子节点的树） 

### js代码
数组
```js
var a = new Array(1,2,3,4)
// [1,2,3,4]
```

链表
```js
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
var l1 = new ListNode(1, 
            new ListNode(2, 
                new ListNode(3, null)
            )
    )
// {
//     "val": 1,
//     "next": {
//         "val": 2,
//         "next": {
//             "val": 3,
//             "next": null
//         }
//     }
// }
```

二叉树
```js
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
var root = new TreeNode(1, new TreeNode(3, new TreeNode(5, null, null), null), new TreeNode(2, new TreeNode(4, null, null)))
// {
//     "val": 1,
//     "left": {
//         "val": 3,
//         "left": {
//             "val": 5,
//             "left": null,
//             "right": null
//         },
//         "right": null
//     },
//     "right": {
//         "val": 2,
//         "left": {
//             "val": 4,
//             "left": null,
//             "right": null
//         },
//         "right": null
//     }
// }
```