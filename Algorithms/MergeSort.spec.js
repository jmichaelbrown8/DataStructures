const { mergeSort } = require("./MergeSort");

describe("mergeSort", () => {
  it("should handle an empty array", () => {
    expect(mergeSort([]).length).toBe(0);
  });

  it("should handle a single item", () => {
    expect(mergeSort([0])[0]).toBe(0);
  });

  it("should handle a sorted array", () => {
    let actual = mergeSort([0, 1, 2]);
    expect(actual[0]).toBe(0);
    expect(actual[1]).toBe(1);
    expect(actual[2]).toBe(2);
  });

  it("should handle a reverse sorted array", () => {
    let actual = mergeSort([2, 1, 0]);
    expect(actual[0]).toBe(0);
    expect(actual[1]).toBe(1);
    expect(actual[2]).toBe(2);
  });

  it("should handle negative numbers", () => {
    let actual = mergeSort([2, -1, 0, 1000]);
    expect(actual[0]).toBe(-1);
    expect(actual[1]).toBe(0);
    expect(actual[2]).toBe(2);
    expect(actual[3]).toBe(1000);
  });
});
