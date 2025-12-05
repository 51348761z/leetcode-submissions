# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next


class Solution:
    def recursiveHelper(self, curr, prev):
        if not curr:
            return prev

        nxt = curr.next
        curr.next = prev
        return self.recursiveHelper(nxt, curr)

    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        return self.recursiveHelper(head, None)

