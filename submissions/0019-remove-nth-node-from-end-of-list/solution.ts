
// class ListNode {
//   val: number;
//   next: ListNode | null;
//   constructor(val?: number, next?: ListNode | null) {
//     this.val = val === undefined ? 0 : val;
//     this.next = next === undefined ? null : next;
//   }
// }

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  if (!head) return null;
  const dummy = new ListNode(0, head);
  let slow = dummy;
  let fast: ListNode["next"] = dummy;

  while (n >= 0) {
    fast = fast?.next ?? null;
    n -= 1;
  }

  while (fast && slow.next) {
    fast = fast.next;
    slow = slow.next;
  }

  if (slow.next) slow.next = slow.next.next;

  return dummy.next;
}

