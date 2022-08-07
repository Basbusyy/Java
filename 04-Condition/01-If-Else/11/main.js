
// if (login == "Employee") {
//   message = "Hello";
// } else if (login == "Director") {
//   message = "Greetings";
// } else if (login == "") {
//   message = "No login";
// } else {
//   message = "";
// }

// login == 'Employee' ? (message ='Hello') 
// :login == 'Director' ? (message ='Greetings') 
// :login == "" ? (message ='NO login') : (message ='');

let login = prompt("Enter username");
message = login =='employee' ? 'hello' : 
          login == 'director' ? 'Greetings' : 
          login == '' ? 'No login' : '' ;
alert(message);