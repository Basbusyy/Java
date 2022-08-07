
const array = [29, 17, 13, 47, 23, 31];
// let sum = 0;

// /// # 1 FOR
// for (let i = 0; i< array.length;i++){
//     sum += array[i] 
// }
// console.log(sum)

 // # 2 FOR IN
// for(let index in array){
//     sum += array[index]
// }
// console.log(sum)

// # 3 FOR OF
// for (let item of array){
//     sum += item
// }
// console.log(sum)

// # 4 FOR EACH
let sum=0
function runEveryItem(item,index,array){
    sum+=item
}
// array.forEach(runEveryItem)// PARAMETER 1 = FUNCTION
array.forEach((el,idx,arr)=>{ ///  CAN DO LIKE runEveryItem
    sum += el;
})
console.log(sum)