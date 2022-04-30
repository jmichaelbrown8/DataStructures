class Node {
  /**
   * Node class to define a node in the LinkedList
   *
   * Can be instantiated with `new Node(data)` to set its data property
   */
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  /**
   * LinkedList class to define a list of Node classes
   *
   * Can be instantiated with `new LinkedList()`
   */
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  /** Adds a node to the tail and returns this LinkedList instance */
  push(data) {
    var newNode = new Node(data);
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

  /** Removes and returns the node from the tail */
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

  /** Adds a node to the head and returns this LinkedList instance */
  unshift(data) {
    // create a new Node
    let newHead = new Node(data);
    // if length is zero, set this.tail to the new Node
    if (!this.length) {
      this.tail = newHead;
    } else {
      // otherwise, set the current head to the new Node's next prop
      newHead.next = this.head;
    }
    // and set this.head to the new Node
    this.head = newHead;

    // increment length
    this.length++;

    return this;
  }

  /** Removes and returns the node from the head */
  shift() {
    // if length is zero, return null
    if (!this.length) return null;

    // if length is one, remove the tail
    if (this.length === 1) {
      this.tail = null;
    }

    // store the current head temporarily
    let currentHead = this.head;

    // set current head's next to this.head
    this.head = currentHead.next;

    // decrement the count
    this.length--;

    // remove next from the current head
    currentHead.next = null;

    // return the current head
    return currentHead;
  }

  /** Gets and returns the Node at the given index, or null if not possible */
  get(index) {}

  /** Sets the Node at the given index, replacing the current. Returns the new List, or null if not possible to set */
  set(value, index) {}

  /** Inserts the Node at the given index, setting its next property to the previous Node at the index */
  insert(value, index) {}

  /** Reverses the LinkedList in place and returns this LinkedList instance */
  reverse() {}
}

module.exports = { LinkedList, Node };
