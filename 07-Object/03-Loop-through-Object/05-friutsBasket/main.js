
const result = {}

let key = prompt("Enter Name Fruit")
let value = prompt("Enter Number Fruit")
let count = value;
let name = key;
if(key !== null && key.trim() !== ''){
    if(count > 1 ){
        key = key+'s' //key+= 's'
        alert(key + count);
    }
    else{
        alert(key+count);
    }

}


console.log(key,count);
console.log(result)



