
var mergeTrees = function(root1, root2) {
    if(root1 == null) {
        return root2
    } 
    if(root2 == null) {
        return root1
    }
    var newRoot = new TreeNode(root1.val + root2.val, null, null)
    newRoot.left = mergeTrees(root1.left, root2.left)
    newRoot.right = mergeTrees(root1.right, root2.right)

    return newRoot
};