const { LinkedList } = require("./LinkedList");

test("should be empty", () => {
  let myList = new LinkedList();
  expect(myList.length).toBe(0);
  expect(myList.head).toBe(null);
  expect(myList.tail).toBe(null);
});

test("should push", () => {
  let myList = new LinkedList();
  myList.push(1);
  expect(myList.length).toBe(1);
  expect(myList.head.data).toBe(1);
  expect(myList.tail.data).toBe(1);

  myList.push("cheese");
  expect(myList.length).toBe(2);
  expect(myList.head.data).toBe(1);
  expect(myList.tail.data).toBe("cheese");
});

test("should pop", () => {
  let myList = new LinkedList();

  // pop empty is null
  expect(myList.pop()).toBe(null);

  // pop one should behave properly
  myList.push(1);
  expect(myList.pop().data).toBe(1);
  expect(myList.length).toBe(0);
  expect(myList.head).toBe(null);
  expect(myList.tail).toBe(null);

  // pop two should behave properly
  myList = new LinkedList();
  myList.push("hello").push("world");
  expect(myList.pop().data).toBe("world");
  expect(myList.length).toBe(1);
  expect(myList.head.data).toBe("hello");
  expect(myList.head.next).toBe(null);
  expect(myList.tail.data).toBe("hello");

  // pop 3+ should behave properly
  myList = new LinkedList();
  myList.push("hello").push("world").push("again");
  expect(myList.pop().data).toBe("again");
  expect(myList.length).toBe(2);
  expect(myList.head.data).toBe("hello");
  expect(myList.tail.data).toBe("world");
});
