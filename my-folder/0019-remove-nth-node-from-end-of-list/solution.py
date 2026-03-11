# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        dummy = ListNode(0, head)
        turtle, rabbit = dummy, head
        while n > 0 and rabbit:
            rabbit = rabbit.next
            n -= 1
        while rabbit:
            rabbit = rabbit.next
            turtle = turtle.next
        turtle.next = turtle.next.next
        return dummy.next


