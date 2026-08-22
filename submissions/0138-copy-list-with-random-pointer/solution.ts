
// class _Node {
//   val: number;
//   next: _Node | null;
//   random: _Node | null;

//   constructor(val?: number, next?: _Node, random?: _Node) {
//     this.val = val === undefined ? 0 : val;
//     this.next = next === undefined ? null : next;
//     this.random = random === undefined ? null : random;
//   }
// }

function copyRandomList(head: _Node | null): _Node | null {
  // 1. return null when head is null
  if (!head) return null;
  // 2. create a correspondence map which maps the original nodes to copied nodes
  const copies = new Map<_Node, _Node>();
  // 3. first pass: create one copied node for each original node
  let current: _Node["next"] = head;
  while (current) {
    copies.set(current, new _Node(current.val));
    current = current.next;
  }
  // 4. second pass: assign the copied .next and .random links
  current = head;
  while (current) {
    const copy = copies.get(current)!;
    copy.next = current.next ? copies.get(current.next)! : null;
    copy.random = current.random ? copies.get(current.random)! : null;
    current = current.next;
  }
  // 5. return the copied link

  return copies.get(head)!;
}
