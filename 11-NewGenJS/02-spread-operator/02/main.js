array1 = [1,2,3,4,5];
spreadfunc = (arr) =>{
    Newarr = [...arr];
    Newarr[3] = Newarr[3]**2;
    return Newarr; //?
} 
spreadfunc(array1);//? 
array1//?

// /// const array1 = [1,2,3,4,5,6];
// let square = (arr) => {
//     let newArr = [...arr];
//     newArr.splice(3,1,arr[3]**2);
//     return newArr;
// };
// console.log(square(array1));
// console.log(array1);


function indexThreeSquare(arr){
    return arr.map((item,index)=> index === 3 ? item ** 2 : item)
};
console.log(indexThreeSquare([1,2,3,4]))//?
indexThreeSquare ([1,2,3,4,5]);
function cb(item,index){
    return item*3;
} const result = [1,3,5,7].map(cb)//?
