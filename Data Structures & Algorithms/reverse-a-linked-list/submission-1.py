# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def recursiveHelper(self, prev, curr):
        if not curr:
            return prev
        
        nxt = curr.next
        curr.next = prev

        new_head = self.recursiveHelper(curr, nxt)
        return new_head

    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        prev, curr = None, head

        while curr:
            nxt = curr.next
            curr.next = prev
            prev = curr
            curr = nxt
        
        return prev