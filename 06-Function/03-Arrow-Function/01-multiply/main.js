// ARROW FUNCTION DEMO 1 - Basic Syntax

// let myArrowFunc = (a,b,c,d) => a+b+c+d 
// let y = myArrowFunc (1,2,3,4)
// console.log(`y : ${y}`)


// // ARROW FUCNTION DEMO 2 - Single parameter
// // let inCreaseByFive(num) => num+5
// let inCreaseByFive = num => num+5
// console.log(inCreaseByFive(3))

// // ARROW FUNCTION DEMO 3 - Multiline Fucntion Body ||Don't forget return
// let calcInterest = (balance,rate) =>{
//     let interest = balance * rate / 100
     
//     return interest 
// }
// calcInterest(100,28)


let myArrowFunc = (a,b) => a*b;
console.log(myArrowFunc(23,9));