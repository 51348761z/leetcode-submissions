# Definition for singly-linked list.
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None


class Solution:
    def hasCycle(self, head: Optional[ListNode]) -> bool:
        tutle = rabbit = head
        while rabbit and rabbit.next:
            rabbit = rabbit.next.next
            tutle = tutle.next
            if rabbit is tutle:
                return True
        return False


