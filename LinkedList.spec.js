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
  expect(myList.head.next.data).toBe("cheese");
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

test("should unshift", () => {
  let myList = new LinkedList();
  myList.unshift(1);
  expect(myList.length).toBe(1);
  expect(myList.head.data).toBe(1);
  expect(myList.tail.data).toBe(1);

  myList.unshift("cheese");
  expect(myList.length).toBe(2);
  expect(myList.head.data).toBe("cheese");
  expect(myList.head.next.data).toBe(1);
  expect(myList.tail.data).toBe(1);
});

test("should shift", () => {
  let myList = new LinkedList();

  // shift empty is null
  expect(myList.shift()).toBe(null);

  // shift one should behave properly
  myList.push(1);
  expect(myList.shift().data).toBe(1);
  expect(myList.length).toBe(0);
  expect(myList.head).toBe(null);
  expect(myList.tail).toBe(null);

  // shift two should behave properly
  myList = new LinkedList();
  myList.push("hello").push("world");
  expect(myList.shift().data).toBe("hello");
  expect(myList.length).toBe(1);
  expect(myList.head.data).toBe("world");
  expect(myList.head.next).toBe(null);
  expect(myList.tail.data).toBe("world");

  // shift 3+ should behave properly
  myList = new LinkedList();
  myList.push("hello").push("world").push("again");
  expect(myList.shift().data).toBe("hello");
  expect(myList.length).toBe(2);
  expect(myList.head.data).toBe("world");
  expect(myList.tail.data).toBe("again");
});
