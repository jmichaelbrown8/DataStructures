class MaxHeap {
  /**
   * MaxHeap stores a roughly sorted binary tree.
   * The root node is always the largest, and the children
   * are always lower than the parent, but there is no
   * guarantee that the sibling items are sorted.
   */
  constructor() {
    this.heap = [];
  }

  /**
   * push adds an item to the end of the array, then bubbles
   * it up to the right position in its parent hierarchy.
   */
  push(val) {
    let length = this.heap.push(val);
    this.bubbleUp(length - 1);
    return this;
  }

  /**
   * pop removes the root item, swaps the lowest item in, then
   * bubbles it down to the right position in its parent hierarchy.
   */
  pop() {
    // case for empty heap
    if (this.heap.length === 0) return null;

    // case for one item remaining
    if (this.heap.length === 1) return this.heap.pop();

    let root = this.heap[0];

    let end = this.heap.pop();
    this.heap[0] = end;
    this.bubbleDown();

    return root;
  }

  /**
   * bubbleUp compares the item to its parent and swaps it up until
   * it is lower than its parent, and greater than its children.
   */
  bubbleUp(childIndex) {
    if (childIndex <= 0) return;
    // parent -> children follows the formula 2n + 1, and 2n + 2
    // so to find a parent of an index n, you can subtract 1 and divide by 2
    let parentIndex = Math.floor((childIndex - 1) / 2);
    let parentValue = this.heap[parentIndex];

    let childValue = this.heap[childIndex];
    if (childValue > parentValue) {
      // swap
      [this.heap[parentIndex], this.heap[childIndex]] = [
        this.heap[childIndex],
        this.heap[parentIndex],
      ];
      // return bubbleUp again on the parentIndex
      return this.bubbleUp(parentIndex);
    }

    return;
  }

  /**
   * bubbleDown compares the root item to its children and swaps it
   * with the child that is greater than it, or the greater of the two
   * if they are both greater than it. This sorts the heap as needed.
   */
  bubbleDown(parentIndex) {
    if (!parentIndex) parentIndex = 0;
    let leftChildIndex = 2 * parentIndex + 1;
    let rightChildIndex = 2 * parentIndex + 2;

    // case for no children
    if (this.heap.length - 1 < leftChildIndex) return;

    let swapIndex = null;
    let parentValue = this.heap[parentIndex];
    let leftChildValue = this.heap[leftChildIndex];
    let rightChildValue = this.heap[rightChildIndex];

    // swap the left if larger than the parent
    if (leftChildValue > parentValue) {
      swapIndex = leftChildIndex;
    }

    // swap the right if the right is larger than the left
    if (swapIndex && rightChildValue > leftChildValue) {
      swapIndex = rightChildIndex;
    }

    // swap the right if larger than parent (and the left has not been set yet)
    if (!swapIndex && rightChildValue > parentValue) {
      swapIndex = rightChildIndex;
    }

    // we know which to swap at this point
    if (swapIndex) {
      [this.heap[parentIndex], this.heap[swapIndex]] = [
        this.heap[swapIndex],
        this.heap[parentIndex],
      ];

      return this.bubbleDown(swapIndex);
    }

    // else return if nothing to swap;
    return;
  }
}

module.exports = MaxHeap;
