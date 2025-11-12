# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution(object):
    def partition(self, head, x):
        """
        :type head: Optional[ListNode]
        :type x: int
        :rtype: Optional[ListNode]
        """
        left_head, left_tail = None, None
        right_head, right_tail = None, None
        next_ = None

        while head is not None:
            next_ = head.next
            head.next = None

            if head.val < x:
                if left_head is None:
                    left_head = head
                else:
                    left_tail.next = head
                left_tail = head
            else:
                if right_head is None:
                    right_head = head
                else:
                    right_tail.next = head
                right_tail = head

            head = next_
        if left_head is None:
            return right_head
        else:
            left_tail.next = right_head
            return left_head


