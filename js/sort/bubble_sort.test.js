const bubbleSort = require('./bubble_sort');

const arr1 = [4, 6, 3, 2, 9, 7];
test('sort random array', () => {
    expect(bubbleSort(arr1)).toEqual([2, 3, 4, 6, 7, 9])
})


const arr2 = [4, 4, 4, 5];
test('sort array with duplicate values', () => {
    expect(bubbleSort(arr2)).toEqual([4, 4, 4, 5]);
})

const arr3 = [9, 8, 7, 6];
test('sort array in reverse order', () => {
    const sortedArr = bubbleSort(arr3);
    expect(sortedArr).toEqual([6, 7, 8, 9])
})