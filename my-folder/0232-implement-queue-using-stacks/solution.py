class MyQueue(object):

    def __init__(self):
        self._in_stack = []
        self._out_stack = []

    def _transfer_if_needed(self):
        if not self._out_stack:
            while self._in_stack:
                self._out_stack.append(self._in_stack.pop())

    def push(self, x):
        """
        :type x: int
        :rtype: None
        """
        self._in_stack.append(x)

    def pop(self):
        """
        :rtype: int
        """
        self._transfer_if_needed()
        if self._out_stack:
            return self._out_stack.pop()
        else:
            raise IndexError

    def peek(self):
        """
        :rtype: int
        """
        self._transfer_if_needed()
        if self._out_stack:
            return self._out_stack[-1]
        else:
            raise IndexError

    def empty(self):
        """
        :rtype: bool
        """
        return not self._in_stack and not self._out_stack


# Your MyQueue object will be instantiated and called as such:
# obj = MyQueue()
# obj.push(x)
# param_2 = obj.pop()
# param_3 = obj.peek()
# param_4 = obj.empty()
