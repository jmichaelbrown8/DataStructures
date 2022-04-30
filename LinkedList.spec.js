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

describe("get", () => {
  beforeEach(() => {
    myList = new LinkedList();
  });

  it("should return null if index is negative", () => {
    expect(myList.get(-5)).toBe(null);
  });

  it("should return null if index is out of bounds", () => {
    expect(myList.get(100)).toBe(null);
  });

  it("should return return the head if index is 0", () => {
    myList.push(1);
    expect(myList.get(0)).toBe(myList.head);
  });

  it("should return return the tail if index is one less than the length", () => {
    myList.push(1).push(2);
    expect(myList.get(1)).toBe(myList.tail);
  });

  it("should return return the right index", () => {
    myList.push(1).push(2).push(3).push(4).push(5);
    expect(myList.get(2).data).toBe(3);
  });
});

describe("set", () => {
  it("should return false if index not in list", () => {
    expect(myList.set(1, 0)).toBe(false);
  });

  it("should set the value, leaving everything else", () => {
    myList.push(1).push(2).push(3);
    myList.set("cheese", 1);
    expect(myList.get(1).data).toBe("cheese");
  });

  it("should return the same list, updated", () => {
    myList.push(1);
    myList.set("cheese", 0);
    expect(myList.length).toBe(1);
    expect(myList.head.data).toBe("cheese");
    expect(myList.head).toBe(myList.tail);
  });
});
