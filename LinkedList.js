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
  get(index) {
    if (index < 0 || index > this.length) return undefined;
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }
  insert(index, value) {
    if (index > this.length || index < 0) return false;
    if (index === 0) return this.unshift(value);
    if (index === this.length) return this.push(value);
    const newNode = new Node(value);
    const prev = this.get(index - 1);
    const temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    var previousNode = this.get(index - 1);
    var removed = previousNode.next;
    previousNode.next = removed.next;
    this.length--;
    return removed;
  }
  reverse() {}
  
}

let list = new LinkedList();
list.push("1");
list.push("2");
list.push("3");
// list.push("4");
// list.push("5");

// list.pop();
// list.shift();
// list.unshift(2);
// console.log(list);
// console.log("is");
// console.log(list.get(2));
console.log(list.insert(0, "555"));
console.log(list);
