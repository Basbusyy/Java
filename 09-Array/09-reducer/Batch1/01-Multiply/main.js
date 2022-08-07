const nums = [-3, 2, 11, -7, 4, 6]
const resultNums = nums.reduce((sum,item)=> sum * item, 1)
console.log(resultNums); //?

// let result = nums.redeuce(function(acc,item,index,array){
//     let newResult = acc * item 
//     return newResult
// },1)