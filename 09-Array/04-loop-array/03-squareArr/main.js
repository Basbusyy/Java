const arr = [2, 3, 5, 7, 11];
let sum=0;

function squareArr(arr){
    const resultArr=[]
    arr.forEach((item)=>{
       let squareNum = item ** 2
       resultArr.push(squareNum)
})
    return resultArr
}
console.log(squareArr(arr)); // [4, 9, 25, 49, 121]