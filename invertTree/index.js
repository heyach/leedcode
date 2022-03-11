var invertTree = function(root) {
    if(root == null) return null
    var nl = invertTree(root.left)
    var nr = invertTree(root.right)
    // 交换左右子树
    root.left = nr
    root.right = nl
    return root
};