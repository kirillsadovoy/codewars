function Node(data) {
  this.data = data;
  this.next = null;
}

function push(head, data) {
  let obj = new Node(data);
  obj.next = head;

  return obj;
}

function buildOneTwoThree() {
  return [3, 2, 1].reduce((head, data) => push(head, data), null);
}
