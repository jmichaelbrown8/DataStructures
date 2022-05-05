const MaxHeap = require("./MaxHeap");

let heap = new MaxHeap();

describe("push", () => {
  beforeEach(() => {
    heap = new MaxHeap();
  });

  it("should add an item to the heap if it's empty", () => {
    expect(heap.heap.length).toBe(0);
    heap.push(1);
    expect(heap.heap.length).toBe(1);
  });

  it("should add an item to the top of the heap if it's largest", () => {
    heap.push(1);
    heap.push(10);
    heap.push(2);
    heap.push(5);
    heap.push(8);
    expect(heap.heap[0]).toBe(10);
  });
});

describe("pop", () => {
  beforeEach(() => {
    heap = new MaxHeap();
    heap.push(1);
    heap.push(2);
    heap.push(10);
  });

  it("should reduce the length to 0", () => {
    heap.pop();
    heap.pop();
    heap.pop();
    expect(heap.heap.length).toBe(0);
  });

  it("should return the max element", () => {
    expect(heap.pop()).toBe(10);
  });

  it("should sort the max element to the top after popping", () => {
    heap.push(90);
    heap.push(60);
    heap.push(99);
    heap.push(80);
    heap.push(20);
    heap.push(100);
    expect(heap.pop()).toBe(100);
    expect(heap.pop()).toBe(99);
    expect(heap.pop()).toBe(90);
    expect(heap.pop()).toBe(80);
    expect(heap.pop()).toBe(60);
  });

  it("should handle an empty heap properly", () => {
    heap.pop();
    heap.pop();
    heap.pop();
    expect(heap.pop()).toBe(null);
  });
});
