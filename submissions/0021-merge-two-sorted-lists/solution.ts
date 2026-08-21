// class ListNode {
//   val: number;
//   next: ListNode | null;
//   constructor(val?: number, next?: ListNode | null) {
//     this.val = val === undefined ? 0 : val;
//     this.next = next === undefined ? null : next;
//   }
// }

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null,
): ListNode | null {
  if (!list1 && !list2) return null;

  const dummy = new ListNode(0, null);
  let tail = dummy;
  let p1 = list1,
    p2 = list2;

  while (p1 && p2) {
    if (p1.val < p2.val) {
      tail.next = p1;
      p1 = p1.next;
    } else {
      tail.next = p2;
      p2 = p2.next;
    }
    tail = tail.next;
  }

  tail.next = p1 ?? p2;

  return dummy.next;
}
