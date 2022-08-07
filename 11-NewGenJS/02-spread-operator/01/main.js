const nums1 = [1, -2, 3, 4];
const nums2 = [8, 3, -8, 1];
// Math.max(...nums1)
const newNums = [5, ...nums1, -6, -1, ...nums2];
let sum = newNums.reduce((item, index) => item + index); //?
console.log(sum);
