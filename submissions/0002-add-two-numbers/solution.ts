
// class ListNode {
//   val: number;
//   next: ListNode | null;
//   constructor(val?: number, next?: ListNode | null) {
//     this.val = val === undefined ? 0 : val;
//     this.next = next === undefined ? null : next;
//   }
// }

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null,
): ListNode | null {
  if (!l1 && !l2) return null;
  const dummy = new ListNode(0, null);
  let tail = dummy;
  let p1 = l1;
  let p2 = l2;
  let carry = 0;

  while (p1 || p2 || carry) {
    const digit1 = p1?.val ?? 0;
    const digit2 = p2?.val ?? 0;

    const total = digit1 + digit2 + carry;
    carry = Math.floor(total / 10);
    tail.next = new ListNode(total % 10, null);

    tail = tail.next;
    p1 = p1?.next ?? null;
    p2 = p2?.next ?? null;
  }

  return dummy.next;
}
