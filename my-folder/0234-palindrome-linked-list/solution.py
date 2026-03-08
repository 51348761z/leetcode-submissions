# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next


class Solution:
    def isPalindrome(self, head: Optional[ListNode]) -> bool:
        dummy = ListNode(0, head)
        turtle, rabbit = dummy, head
        while rabbit and rabbit.next:
            rabbit = rabbit.next.next
            turtle = turtle.next

        prev, curr = None, turtle.next
        while curr:
            temp = curr.next
            curr.next = prev
            prev = curr
            curr = temp

        l1, l2 = prev, dummy.next
        while l1:
            if l1.val != l2.val:
                return False
            l1, l2 = l1.next, l2.next
        return True


