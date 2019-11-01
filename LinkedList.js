class Node {
  constructor(value) {
    this.value = value;
    this.node = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    var current = this.head;
    var newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  shift() {
    if (!this.head) return undefined;
    const first = this.head;
    this.head = first.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return first;
  }
  unshift(value) {
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    }
    let newNode = new Node(value);
    let cuurent = this.head;
    this.head = newNode;
    this.head.next = cuurent;
    this.length++;
    return this;
  }
}
let list = new LinkedList();
list.push("1");
list.push("2");
// list.pop();
// list.shift();
list.unshift(2);
console.log(list);
