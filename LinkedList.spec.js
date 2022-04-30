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
});
