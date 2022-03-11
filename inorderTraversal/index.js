
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
var root = new TreeNode(1, null,
                           new TreeNode(2, 
                                            new TreeNode(3, null, null),
                                            null))

var inorderTraversal = function(root) {
    var res = []
    function inorderTraversal2(root) {
        if(!root) return
        // 对左树递归中序遍历
        inorderTraversal2(root.left)
        res.push(root.val)
        // 对右树递归遍历
        inorderTraversal2(root.right)
    }
    inorderTraversal2(root)
    return res;
};
inorderTraversal(root)