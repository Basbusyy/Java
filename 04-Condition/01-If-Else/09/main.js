let num1 = prompt("Enter Number 1 : ")
let num2 = prompt("Enter Number 2 : ")
let num3 = prompt("Enter Number 3 : ")

let a = num1;
let b = num2;
let c = num3;

if (num1 >= num2){
    if (num1 >= num3){
        if(num2>=num3){
        console.log(`${num1},${num2},${num3}`)
        alert(`${num1},${num2},${num3}`)
        }
        else  {
        console.log(`${num1},${num3},${num2}`)
        alert(`${num1},${num3},${num}`)
        }
    }
        else {
        console.log(`${num3},${num2},${num1}`)
        alert(`${num3},${num2},${num1}`)
     }
 
 } else {
    if(num2 >= num3){
        if(num1 >= num3){
            console.log(`${num2},${num1},${num3}`)
            alert(`${num2},${num1},${num3}`)
        }
        else {
            console.log(`${num2},${num3},${num1}`)
            alert(`${num2},${num3},${num1}`)
        }
    } 
    else{
        console.log(`${num3},${num2},${num1}`)
        alert(`${num3},${num2},${num1}`)
    }
 }  




