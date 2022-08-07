// let Array = +prompt("Enter Number");
// if( Array !== Number || Array == null ){
//     return Array
// }else{
//     return 
// }

// have prompt in do while 
 

let arr =[];
let result = 0;
let sum = 0;
do { result = prompt ("Input Number : ")
    if(result != null && !isNaN(result) && result != '' && result.trim() != '')
    arr.push(result)
    sum = +result + sum
    
} while (result != null && 
    !isNaN(result) && 
    result != '' && 
    result.trim() != ''
 );
console.log(arr);
console.log(sum);