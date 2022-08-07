number = (...number) => {
    
    sum = number.reduce ((sum,item) => sum * item,1)
    return sum
};
console.log(number(1,2,3,4,5));

/* LAB 01

function multiply(...nums){
    let result =1;
    for (let num of nums) {
        result *= num;
    }
    return result;
} console.log(multiply(1,2,3,4)); */


