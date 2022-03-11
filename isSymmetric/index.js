
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
var root = new TreeNode(1, new TreeNode(2, 
                                            new TreeNode(3, null, null), 
                                            new TreeNode(4, null, null)), 
                           new TreeNode(2, 
                                            new TreeNode(4, null, null),
                                            new TreeNode(3, null, null)))

function check2TreeMirror(tree1, tree2) {
    if(!tree1 && !tree2) return true // t1 和 t2都为null，互为镜像
    if(!tree1 || !tree2) return false // 经过上一步，此时 t1 和 t2 里有一个null，肯定不镜像了
    return tree1.val == tree2.val && check2TreeMirror(tree1.left, tree2.right) && check2TreeMirror(tree1.right, tree2.left)
}
var isSymmetric = function(root) {
    return check2TreeMirror(root, root)
};
isSymmetric(root)