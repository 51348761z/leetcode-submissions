
// class ListNode {
//   val: number;
//   next: ListNode | null;
//   constructor(val?: number, next?: ListNode | null) {
//     this.val = val === undefined ? 0 : val;
//     this.next = next === undefined ? null : next;
//   }
// }

function swapPairs(head: ListNode | null): ListNode | null {
  const dummy = new ListNode(0, head);
  let previous = dummy;

  while (previous.next) {
    const first = previous.next;
    const second = first.next;
    if (!second) break;

    const remains = second.next;
    first.next = remains;
    second.next = first;
    previous.next = second;

    previous = first;
  }

  return dummy.next;
}
