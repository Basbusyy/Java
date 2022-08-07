
let john = { name: 'John', age: 27 };
let jo = { name: 'Jo', age: 21 };
let jin = { name: 'Jin', age: 25 };
let arr = [john, jo, jin];


function getAverageAge(arr){
    summ = arr.reduce ((sum,item)=> (sum = sum+item.age),0);
    summ = summ/ arr.length ;
    return summ;
}

function getAverageAge(arr){
    let sumAge = arr.reduce(function(acc,item,){
        let age = item.age
        return acc+age 
    },0)
    let averageAge = sumAge / arr.length
    return averageAge
}
getAverageAge(arr) //?

// console.log(getAverageAge(arr)); // (27 + 21 + 25) / 3 = 24.33