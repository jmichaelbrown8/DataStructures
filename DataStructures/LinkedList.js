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
  get(index) {
    // if index is negative, return null
    if (index < 0) return null;

    // if index is greater or equal to the length, return null
    if (index >= this.length) return null;

    // if index is 0, return the head
    if (index === 0) return this.head;

    // if index is length - 1, return the tail
    if (index === this.length - 1) return this.tail;

    // loop through until the index to return the Node
    let i = 0;
    let current = this.head;
    while (i !== index) {
      current = current.next;
      i++;
    }

    return current;
  }

  /** Sets the Node at the given index, replacing the current. Returns the new List, or null if not possible to set */
  set(value, index) {
    // get the Node at the index
    let node = this.get(index);
    // if the Node is null, return false
    if (!node) return false;

    node.data = value;

    return this;
  }

  /** Inserts the Node at the given index, setting its next property to the previous Node at the index */
  insert(value, index) {
    // get the preceding node
    let precedingNode = this.get(index - 1);

    // create the node
    let myNode = new Node(value);

    // if the position isn't possible, return false
    if (index < 0 || index > this.length) return false;

    // insert at head if index is 0
    if (index === 0) {
      let lastHead = this.head;
      this.head = myNode;
      myNode.next = lastHead;
      if (this.length === 0) {
        this.tail = this.head;
      }
    }

    // insert at tail if index is length
    else if (index === this.length) {
      let lastTail = this.tail;
      lastTail.next = myNode;
      this.tail = myNode;
    }

    // else, loop through to get the node at the index before
    else {
      let i = 0;
      let preIndex = this.head;
      while (i !== index - 1) {
        preIndex = preIndex.next;
        i++;
      }
      myNode.next = preIndex.next;
      preIndex.next = myNode;
    }

    this.length++;
    return this;
  }

  /** Reverses the LinkedList in place and returns this LinkedList instance */
  reverse() {
    // nothing needed for length 1 or 0
    if (this.length < 2) return this;

    // loop through all items, setting next back to previous
    let previous = this.head;
    let current = previous.next;
    let next = current.next;

    // 1 <- 2 <- 3 <- 4 <- 5 -> null
    //                p    c    n
    while (true) {
      // flip the link backwards
      current.next = previous;
      // move all variables forward
      previous = current;
      current = next;
      if (!next) break;
      next = next.next;
    }

    // set new head and new tail
    [this.head, this.tail] = [this.tail, this.head];
    // set new tail and set it's next to null
    this.tail.next = null;

    // return this;
    return this;
  }
}

module.exports = { LinkedList, Node };
