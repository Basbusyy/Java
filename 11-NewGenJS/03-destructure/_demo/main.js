const person = {
firstName : 'John',
lastName : 'DOE' ,
hobbies :['Sprot','Shopping'],
address : {
    privince : 'Bangkok',
    district : 'Pathumwan'
},
friends:[
    {
        firstName : 'Jim',
        lastName : 'Carry',
        phoneNumber : 0909091131
    },
    {
        firstName : 'Jack',
        lastname : 'Sup',
        phoneNumber : 0909091145
    }
    ]
};

// const {firstName, lastName, age = 20 }  = person; 
 
// rename varaible to fname
// const{firstName : fname} = person;
// // address => {province:'Bangkok', district:'Pathumwan'}
// // address.province
// const{address:{province}} = person;
// province => 'Bangkok' 


///DESTRUCT ARRAY
// const numbers = [79,45,66,58,32,12,63,89]; 
// const [firstNumber , secondNumber] = numbers;  
// const [,,, fourthNumber] = [79,45,66,58]; 
// const [a,b, ...c]=numbers; //c=> []

const[d = 0]=[];
//REST WITH OBJECT DESTRUCTURING
const {firstNamem, lastName ,...otherInfo} = person;
const {
    friends: [{phoneNumber: firstPhonenumber}] } = person;

const getFullname = user =>{
    console.log(`${user.firstName},${user.lastName}`)
};
getFullname({firstNamem: 'John',lastname: 'Doe'});


