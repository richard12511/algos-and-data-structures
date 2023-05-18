function binarySearch(arr, target) {
  if (!arr || arr.length === 0) return -1;

  let min = 0;
  let max = arr.length;

  do {
    let mid = Math.floor((min + max) / 2);
    let val = arr[mid];

    if (target === val) return mid;
    if (target > val) {
      min = mid + 1;
    } else if (target < val) {
      max = mid;
    }
    console.log(`min:${min}, max:${max}`);
  } while (min < max);

  if (min <= max) return -1;
}

module.exports = binarySearch;
