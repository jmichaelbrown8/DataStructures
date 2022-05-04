/** Inserts into a sorted array using linear search */
const insertSortedLinear = (val, arr) => {
  let i = 0;
  while (i < arr.length) {
    if (val < arr[i]) {
      break;
    }
    i++;
  }
  return [...arr.slice(0, i), val, ...arr.slice(i)];
};

/** Inserts into a sorted array using binary search */
const insertSortedBinary = (val, arr) => {
  let low = 0;
  let high = arr.length - 1;
  let mid = ~~((low + high) / 2);

  // break out of the while loop if low and high converge
  while (low < high - 1) {
    // if the value matches, the mid index is good enough
    if (val === arr[mid]) break;

    // short circuit if the value is less than the lower bound
    if (val <= arr[low]) {
      mid = low;
      break;
    }

    // short circuit if the value is higher than the upper bound
    if (val >= arr[high]) {
      mid = high + 1;
      break;
    }

    // reduce the window if less than the mid point
    if (val < arr[mid]) {
      high = mid;
    }

    // reduce the window if greater than the mid point
    if (val > arr[mid]) {
      low = mid;
    }

    // recalculate mid
    mid = ~~((low + high) / 2);
  }

  if (val > arr[mid]) {
    mid++;
  }

  return [...arr.slice(0, mid), val, ...arr.slice(mid)];
};

module.exports = { insertSortedBinary, insertSortedLinear };
