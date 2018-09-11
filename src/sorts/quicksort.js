const swap = (arr, left, right) => {
  const temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;
};

const part = (arr, left, right) => {
  const center = Math.floor((left + right) / 2);
  const tempItem = arr[center];
  let leftCursor = left;
  let rightCursor = right;

  while (leftCursor <= rightCursor) {
    while (arr[leftCursor] < tempItem) leftCursor++;

    while (arr[rightCursor] > tempItem) rightCursor--;

    if (leftCursor <= rightCursor) swap(arr, leftCursor++, rightCursor--);
  }

  return leftCursor;
};

/**
 * quicksort
 * @param {Array} arr
 * @param {Number} left
 * @param {Number} right
 */
const quicksort = (arr, left, right) => {
  let index = null;

  if (arr.length > 1) {
    index = part(arr, left, right);

    if (left < index - 1) {
      quicksort(arr, left, index - 1);
    }

    if (index < right) {
      quicksort(arr, index, right);
    }
  }

  return arr;
};

export default quicksort;
