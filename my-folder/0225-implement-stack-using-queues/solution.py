from collections import deque


class MyStack(object):

    def __init__(self):
        self._queue = deque()

    def push(self, x):
        """
        :type x: int
        :rtype: None
        """
        self._queue.append(x)
        for _ in range(len(self._queue) - 1):
            self._queue.append(self._queue.popleft())

    def pop(self):
        """
        :rtype: int
        """
        if self._queue:
            return self._queue.popleft()
        else:
            raise IndexError

    def top(self):
        """
        :rtype: int
        """
        if self._queue:
            return self._queue[0]
        else:
            raise IndexError

    def empty(self):
        """
        :rtype: bool
        """
        return not self._queue


# Your MyStack object will be instantiated and called as such:
# obj = MyStack()
# obj.push(x)
# param_2 = obj.pop()
# param_3 = obj.top()
# param_4 = obj.empty()
