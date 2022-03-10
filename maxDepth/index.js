function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
var root = new TreeNode(1, new TreeNode(3, new TreeNode(5, null, null), null), new TreeNode(2, new TreeNode(4, null, null)))
var root2 = new TreeNode(1, new TreeNode(2))
var maxDepth = function(root) {
    if(root == null) {
        return 0
    }
    // 我草，这样变成最大深度了
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
};
maxDepth(root2)