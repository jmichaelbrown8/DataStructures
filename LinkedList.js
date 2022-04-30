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
    if (!this.length) return null;

    // if length is one, set head and tail to null, then return
    if (this.length === 1) {
      let oldTail = this.tail;
      this.head = null;
      this.tail = null;
      this.length--;
      return oldTail;
    }

    let current = this.head;
    let newTail = current;

    // find the node before the tail
    while (current.next) {
      current = newTail.next;
      if (current.next) {
        newTail = current;
      }
    }

    newTail.next = null;
    this.tail = newTail;
    this.length--;
    return current;
  }

  unshift(val) {}

  shift() {}

  get(index) {}

  set(value, index) {}

  reverse() {}
}

module.exports = { LinkedList, Node };
