const array1 = [1, 2, 30, 400];
// result: [2, 4, 60, 800]
const resultArr1 = array1.map(function(item,index,array){
 return item *2
})
console.log(resultArr1);

const array2 = [1, 2, 3, 4];
// result: ["1", "2", "3", "4"]
const resultArr2 = array2.map((item) => String(item))
console.log(resultArr2);


const array3 = [1, '1', 2, {}];
// result: ["number", "string", "number", "object"]
const resultArr3 = array3.map(item => typeof("item"))
console.log(resultArr3)

// const array4 = ['apple', 'banana', 'orange'];
// // result: ["APPLE", "BANANA", "ORANGE"]|
const resultArr4 = array4.map((item)=> (item = item.toUpperCase()))

const array5 = [1, 3, 4, 5, 6, 7, 8];
// result: ["odd", "odd", "even", "odd", "even", "odd", "even"]
// const resultArr5 =array.map((item)=>)


// const array = [1, -3, 2, 8, -4, 5];
// // result: [1, 3, 2, 8, 4, 5]

// const array = [100, 200.25, 300.84, 400.3];
// // result: ["100.00", "200.25", "300.84", "400.30"]

// const array8 = [0, 5, 10, 7, 6, 5, 0];
// // result: ["Jan", "Jun", "Nov", "Aug", "Jul", "Jun", "Jan"]
// const Month = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
// const resultArr8 = array8.map((item,index) => Month[item])
// const array = [1, 16, 81, 256, 625, 1296];
// // result: [1, 2, 3, 4, 5, 6]

// const array = [
//   { name: 'apple', age: 14 },
//   { name: 'banana', age: 18 },
//   { name: 'watermelon', age: 32 }
// ];
// // result: ["apple", "banana", "watermelon"]

// const array = [
//   { name: 'apple', age: 14 },
//   { name: 'banana', age: 18 },
//   { name: 'watermelon', age: 32 }
// ];
// // result: [14, 18, 32]

// const array = [
//   { name: 'apple', surname: 'London' },
//   { name: 'banana', surname: 'Bangkok' },
//   { name: 'watermelon', surname: 'Singapore' }
// ];
// // result: ["apple London", "banana Bangkok", "watermelon Singapore"]

const array13 = [
  { name: 'apple', birth: '2000-01-01' },
  { name: 'banana', birth: '1990-10-01' },
  { name: 'watermelon', birth: '1985-12-01' }
];
const Current_year= '2021'
const resultArr13 = array13.map(item =>{

    // let currentObj = {...item}
    // let age =  Current_year -item.birth.slice(0,4) 
return {...item,age:age}
    currentObj.age = age
}) 
console.log(currentObj) //?
// result: [
//   { name: "apple", birth: "2000-01-01", age: 21 },
//   { name: "banana", birth: "1990-10-01", age: 31 },
//   { name: "watermelon", birth: "1985-12-01", age: 36 },
// ]

const array = [
  { name: 'apple', birth: '2000-01-01' },
  { name: 'banana', birth: '1990-10-10' },
  { name: 'watermelon', birth: '1985-12-30' }
];
// result: [
//     "<tr><td>apple</td><td>01 jan 2000</td></tr>",
//     "<tr><td>banana</td><td>10 oct 1990</td></tr>",
//     "<tr><td>watermelon</td><td>30 dec 1985</td></tr>",
// ]


const arrayInt = [1, 2, 30, 400];

const reultInt = arrayInt.map(function (item, index, arr) {
    return item * 2; //?
});

const arrayNum = [1, 2, 3, 4];
const resultNum = arrayNum.map(function (item) {
    return (item = String(item));
}); //?

const arrayNum2 = [1, '1', 2, {}];
const resultNum2 = arrayNum2.map(function (item) {
    return (item = typeof item);
}); //?

const arrayFruitsUpper = ['apple', 'banana', 'orange'];
const resulFruitUpper = arrayFruitsUpper.map(function (item) {
    return (item = item.toUpperCase()); //?
});

const arrayOddEven = [1, 3, 4, 5, 6, 7, 8];
const resultOddEven = arrayOddEven.map(function (item) {
    if (item % 2 !== 0) {
        return 'Even';
    } else {
        return 'Odd';
    }
}); //?

const arrayMinus = [1, -3, 2, 8, -4, 5];
const resultMinus = arrayMinus.map(function (item) {
    if (item < 0) {
        return (item = item - item - item);
    } else {
        return item;
    }
}); //?

const arraytoFixed = [100, 200.25, 300.84, 400.3];
const resulttoFixed = arraytoFixed.map(function (item) {
    return String(item.toFixed(2));
}); //?

const arrayMonth = [0, 5, 10, 7, 6, 5, 0];
const resultMonth = arrayMonth.map(function (item) {
    let arrayMon = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'July',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
    ];
    return (item = arrayMon[item]);
}); //?

const arrayDivide = [1, 16, 81, 256, 625, 1296];
const resultDivide = arrayDivide.map(function (item) {
    return Math.sqrt(Math.sqrt(item));
    // return Math.(item);
}); //?

const arrayName = [
    { name: 'apple', age: 14 },
    { name: 'banana', age: 18 },
    { name: 'watermelon', age: 32 },
];
const resultName = arrayName.map(function (item) {
    return item.name;
}); //?

const arrayNameFruit = [
  { name: 'apple', age: 14 },
  { name: 'banana', age: 18 },
  { name: 'watermelon', age: 32 },
];

const resultNameFruit = arrayNameFruit.map(function (item) {
  return item.age;
}); //?

const arraySur = [
  { name: 'apple', surname: 'London' },
  { name: 'banana', surname: 'Bangkok' },
  { name: 'watermelon', surname: 'Singapore' },
];
const resultSur = arraySur.map(function (item) {
  return item.name + '  ' + item.surname;
}); //?

const arrayBirth = [
  { name: 'apple', birth: '2000-01-01' },
  { name: 'banana', birth: '1990-10-01' },
  { name: 'watermelon', birth: '1985-12-01' },
];
const resultBirth = arrayBirth.map(function (item) {
  let keepage = 2021 - item.birth.slice(0, 4);
  item.age = keepage;
  return item;
}); //?
const arrayBirth2 = [
  { name: 'apple', birth: '2000-01-01' },
  { name: 'banana', birth: '1990-10-10' },
  { name: 'watermelon', birth: '1985-12-30' },
];
const resultBirth2 = arrayBirth2.map(function (item) {
  let day = item.birth.slice(-2);
  item.day;
  let month = item.birth.slice(-5, -3);
  item.month;
  let year = item.birth.slice(0, 4);
  console.log(year);
}); //?