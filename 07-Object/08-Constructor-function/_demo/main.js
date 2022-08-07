// //// ### Normal function
// function myNormalFN(){
//     return 5;
// }

// let result = myNormalFN()
// console.log(result)

// //// #### constructor function
// // Prototype
// function 





// ,

// //// when Execute
// let instance = new MyConstructorFN()


// /// ########## DEMO -1 

// function User(home){
//     ///this = instance created by new keyword
//     // STEP 1 : this = {}
//     // STEP 2 : add property to object this (s1)
//     this.name = name;
//     this .isAdmin = true;
//     this.address = "",
//     this.sayHi = function(){
//         alert("HELLO")
//     }
    


//     // STEP3 : return this// object with property
//     // SUM : this = instance created by new keyword
// }
    
// // create instance from prototype
// let user = new User('john');
// console.log(user)

// let user2 = new User('Jeffy');
// console.log(user2)

// alert(user.name); //john
// alert(user.isAdmin); // true
// function CodecampStudent(name,age){
// // S1 : this = {}
// // S2 : defined Property
//     this.name = name
//     this.age = age
//     // S3 : return this
// }

// let student1 = new CodecampStudent('Game',25)
// let student2 = new CodecampStudent('Yun',32)

function User(name) {
    // S1 : this= {}
    // S2 : defined
    this.name = name;
    this.sayHi = function () {
      alert('My name is: ' + this.name);
    };
    // this = {name : "John" , sayHi}
  }
  let john = new User('John');
  john.sayHi(); // My name is: John