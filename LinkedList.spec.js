const { LinkedList } = require("./LinkedList");

let myList;

beforeEach(() => {
  myList = new LinkedList();
});
describe("LinkedList", () => {
  test("empty list should have the right properties", () => {
    expect(myList.length).toBe(0);
    expect(myList.head).toBe(null);
    expect(myList.tail).toBe(null);
  });
});

describe("push", () => {
  it("should push properly", () => {
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
});

describe("pop", () => {
  beforeEach(() => {
    myList = new LinkedList();
  });

  it("should return null if empty", () => {
    expect(myList.pop()).toBe(null);
  });

  it("should pop from one properly", () => {
    myList.push(1);
    expect(myList.pop().data).toBe(1);
    expect(myList.length).toBe(0);
    expect(myList.head).toBe(null);
    expect(myList.tail).toBe(null);
  });

  it("should pop from two properly", () => {
    myList.push("hello").push("world");
    expect(myList.pop().data).toBe("world");
    expect(myList.length).toBe(1);
    expect(myList.head.data).toBe("hello");
    expect(myList.head.next).toBe(null);
    expect(myList.tail.data).toBe("hello");
  });

  it("should pop from three properly", () => {
    myList.push("hello").push("world").push("again");
    expect(myList.pop().data).toBe("again");
    expect(myList.length).toBe(2);
    expect(myList.head.data).toBe("hello");
    expect(myList.tail.data).toBe("world");
  });
});

describe("unshift", () => {
  it("should unshift properly", () => {
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
});

describe("shift", () => {
  beforeEach(() => {
    myList = new LinkedList();
  });

  it("should return null if empty", () => {
    expect(myList.shift()).toBe(null);
  });

  it("should shift one properly", () => {
    myList.push(1);
    expect(myList.shift().data).toBe(1);
    expect(myList.length).toBe(0);
    expect(myList.head).toBe(null);
    expect(myList.tail).toBe(null);
  });

  it("should shift two properly", () => {
    myList = new LinkedList();
    myList.push("hello").push("world");
    expect(myList.shift().data).toBe("hello");
    expect(myList.length).toBe(1);
    expect(myList.head.data).toBe("world");
    expect(myList.head.next).toBe(null);
    expect(myList.tail.data).toBe("world");
  });

  it("should shift three properly", () => {
    myList = new LinkedList();
    myList.push("hello").push("world").push("again");
    expect(myList.shift().data).toBe("hello");
    expect(myList.length).toBe(2);
    expect(myList.head.data).toBe("world");
    expect(myList.tail.data).toBe("again");
  });
});
