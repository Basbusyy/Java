/// OBJECT = Collection of Key-Value pair



////// Object Declaretion #1
// const myObj = new Object
// console.log(myObj)

///  Object Literal
const person = {
    firstName :"John" ,
    lastName : "Doe",
    age : 27,
    isAdmin : true,
    child : null,
    address :{
        road : "Sukhumvit",
        province : "Bangkok"
    },

// Method = function in Object
 sayHi : function(){
    alert("HELLO")
}

}
console.log(person.firstName)
console.log(person.lastName)
console.log(person.address.road)
console.log(person.address.distric) /// Undefined


//// ACCESS BY DOT
///// UPDATE

person.firstName = "BAS" 
console.log(person.firstName)
person.age = ''

///DELETE
// delete person.age ;
// ADD
// person.salary(5000);

/// ACCESS BY SQUARE BRACKET []

/// GET
// console.log(person['firstName']) // John
// console.log(person[firstName]) // REFERENCE ERROE
// console.log(person['age']) //27

// ADD
// person['graduate school'] = 'Codecamp'
// console.log(person)

/// PROPOTY SHORTHAND

let username = 'CC12';
let password = "1234"
let role = "Admin"
// const user = {
//     username : username ,
//     password : password ,
//     role : role
// const user = {
//     username,
//     password,
//     role,
// }
/// OPTION CHAINING
let user = {};
console.log (user.address)