const { insertSortedBinary, insertSortedLinear } = require("./InsertSort");

let array = [];

describe("insertSortedLinear", () => {
  beforeEach(() => {
    array = [1, 5, 10, 25, 25, 25, 60];
  });

  it("should handle an empty array", () => {
    array = insertSortedLinear(1, []);
    expect(array[0]).toBe(1);
  });

  it("should handle a value less than the first item", () => {
    array = insertSortedLinear(-1, array);
    expect(array[0]).toBe(-1);
  });

  it("should handle a value greater than the last item", () => {
    array = insertSortedLinear(100, array);
    expect(array[array.length - 1]).toBe(100);
  });

  it("should sort to the middle properly", () => {
    array = insertSortedLinear(3, array);
    expect(array[1]).toBe(3);
    array = insertSortedLinear(59, array);
    expect(array[array.length - 2]).toBe(59);
  });

  it("should handle equal value properly", () => {
    array = insertSortedLinear(25, array);
    expect(array).toEqual(expect.arrayContaining([25, 25, 25, 25]));
  });
});

describe("insertSortedBinary", () => {
  beforeEach(() => {
    array = [1, 5, 10, 25, 25, 25, 60];
  });

  it("should handle an empty array", () => {
    array = insertSortedBinary(1, []);
    expect(array[0]).toBe(1);
  });

  it("should handle a value less than the first item", () => {
    array = insertSortedBinary(-1, array);
    expect(array[0]).toBe(-1);
  });

  it("should handle a value greater than the last item", () => {
    array = insertSortedBinary(100, array);
    expect(array[array.length - 1]).toBe(100);
  });

  it("should sort to the middle properly", () => {
    array = insertSortedBinary(3, array);
    expect(array[1]).toBe(3);
    array = insertSortedBinary(59, array);
    expect(array[array.length - 2]).toBe(59);
  });

  it("should handle equal value properly", () => {
    array = insertSortedBinary(25, array);
    expect(array).toEqual(expect.arrayContaining([25, 25, 25, 25]));
  });
});
