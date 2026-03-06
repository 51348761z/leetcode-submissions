# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:

        def recursive(prev, curr):
            if not curr:
                return prev

            nextN = curr.next
            curr.next = prev
            prev = curr

            return recursive(curr, nextN)

        return recursive(None, head)


