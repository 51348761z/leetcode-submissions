# Definition for singly-linked list.
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next: Optional[ListNode] = None


class Solution:
    def hasCycle(self, head: Optional[ListNode]) -> bool:
        if head is None:
            return False

        slow: ListNode = head
        fast: ListNode = head
        while fast.next and fast.next.next:
            slow = slow.next
            fast = fast.next.next
            if slow is fast:
                return True
        return False


