const bubble_sort = require('./bubble_sort');

const arr1 = [4, 6, 3, 2, 9, 7];
test('sort random array', () => {
    const sortedArr = bubble_sort(arr1);
    expect(sortedArr).toEqual([2, 3, 4, 6, 7, 9])
})

const arr2 = [4, 4, 4, 5];
test('sort array with duplicate values', () => {
    expect(bubble_sort(arr2)).toEqual([4, 4, 4, 5]);
})

const arr3 = [9, 8, 7, 6];
test('sort array in reverse order', () => {
    const sortedArr = bubble_sort(arr3);
    expect(sortedArr).toEqual([6, 7, 8, 9])
})