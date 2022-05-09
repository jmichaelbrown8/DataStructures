const mergeArrays = (arr1, arr2) => {
  let i = 0;
  let j = 0;
  let newArr = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      // place arr1[i] in the new array and increment i
      newArr.push(arr1[i]);
      i++;
    } else {
      newArr.push(arr2[j]);
      j++;
    }
  }
  if (i < arr1.length) {
    newArr = newArr.concat(arr1.slice(i));
  }
  if (j < arr2.length) {
    newArr = newArr.concat(arr2.slice(j));
  }

  return newArr;
};

const mergeSort = (arr) => {
  // base case if arr is less than 2 elements, which is always "sorted"
  if (arr.length < 2) return arr;

  let mid = Math.floor(arr.length / 2);

  // split the array and merge the sorted arrays
  return mergeArrays(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid)));
};

module.exports = { mergeSort };
