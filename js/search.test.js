const binarySearch = require('./search');

const arr = [0, 2, 5, 9];
test('5 returns index 2', () => {
  expect(binarySearch(arr, 5)).toBe(2);
});

test('0 return index 0', () => {
  expect(binarySearch(arr, 0)).toBe(0);
});

test('2 return index 1', () => {
  expect(binarySearch(arr, 2)).toBe(1);
});

test('9 return index 3', () => {
  expect(binarySearch(arr, 9)).toBe(3);
});

test('12 return index -1', () => {
  expect(binarySearch(arr, 12)).toBe(-1);
});

const arr2 = [0, 2, 5, 9, 12, 14, 19];
test('9 return index 3', () => {
  expect(binarySearch(arr2, 9)).toBe(3);
});
