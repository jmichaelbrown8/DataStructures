class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    var newNode = new Node(val);
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
    // if length is zero, return null
    // if length is one, set head and tail to null, then return
    let current = this.head;
    let newTail = current;
    // find the node before the tail
    while (newTail.next) {
      current = newTail.next;
      newTail = current;
    }
    // store the value of the last tail to return later
    // set next to null on the new tail
    // set this.tail to new tail
    // decrement the length
    // return the old tail
    return oldTail;
  }

  unshift(val) {}

  shift() {}

  get(index) {}

  set(value, index) {}

  reverse() {}
}

module.exports = { LinkedList, Node };
