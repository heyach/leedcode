
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
var root = new TreeNode(1, new TreeNode(3, new TreeNode(5, null, null), null), new TreeNode(2, new TreeNode(4, null, null)))
var root2 = new TreeNode(2, new TreeNode(4, new TreeNode(6, null, null), null), new TreeNode(2, new TreeNode(4, null, null)))
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
mergeTrees(root, root2)