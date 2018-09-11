const merge = (left, right) => {
  const arr = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      arr.push(left[0]);
      left = left.slice(1);
    } else {
      arr.push(right[0]);
      right = right.slice(1);
    }
  }

  return [...arr, ...left, ...right];
};

/**
 * mergesort
 * @param {Array} arr
 */
const mergesort = arr => {
  if (arr.length < 2) return arr;

  const mid = Math.floor(arr.length / 2);

  return merge(mergesort(arr.slice(0, mid)), mergesort(arr.slice(mid, arr.length)));
};

export default mergesort;
