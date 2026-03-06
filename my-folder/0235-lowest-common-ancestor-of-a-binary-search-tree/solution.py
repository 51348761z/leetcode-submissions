# Definition for a binary tree node.
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None


class Solution:
    def lowestCommonAncestor(
        self, root: "TreeNode", p: "TreeNode", q: "TreeNode"
    ) -> "TreeNode":
        curr = root
        minn = min(p.val, q.val)
        maxx = max(p.val, q.val)

        while curr:
            if curr.val > maxx:
                curr = curr.left
            elif curr.val < minn:
                curr = curr.right
            else:
                return curr


