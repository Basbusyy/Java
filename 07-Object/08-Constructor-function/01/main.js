 // PROTO : {num1:0 , num2 : 0 ,sum : f() , read : f() , mul : f()
 
 function Calculator(){
  // S1: this = {}
  // S2: defined property to THIS = {}
  
  /// ADD VALUE
  this.num1 = 0; //{num1 : 0}
  this.num2 = 0; //{num1 : 0 , num2 : 0}
  
  //// ADD METHOD  
this.sum = function(){          //{num1:0 , num2 : 0 , sum : f()}
    return this.num1 + this.num2
}
this.read = function(){         //{num1:0 , num2 : 0 , sum : f() , read : f()}
    let value1 = +prompt("ENTER VALUE1") 
    let value2 = +prompt("ENTER VALUE2") 
    
    this.num1=value1
    this.num2=value2
}
this.mul = function(){          //{num1:0 , num2 : 0 , sum : f() , read : f() , mul : f()}
    return
}

//// S3 : auto return this = {sum : f() , read : f() , mul : f()}
}
  const calculator = new Calculator()
  const calculator2 = new Calculator()

  calculator.read()
  console.log(Calculator(this.sum))
  console.log(Calculator(this.mul))
  console.log(Calculator)


////////   ทำเอง ////////////
//   function Calculator(){

//     this.read = function (){
//         this.number1 = +prompt('Enter number 1');
//         this.number2 = +prompt('Enter number 2');
//      };
//      this.sum = function (){
//              return this.number1 + this.number2
//     };
//     this.mul = function (){
//              return this.number1 * this.number2
//      };
//   }
//    let Show = new Calculator("Show") 
//   Show.read();
//   console.log(Show.sum())
//   console.log(Show.mul())