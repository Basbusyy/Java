let username = prompt("Enter Username")
let password = prompt("Enter Password")

if (username == null || password.trim() == '' ){
// ไม่ใส่ username  มา
}else if (password == null || password.trim()=='') {
    // ใส่ Username ไม่ใส่ Password
}
    
      else {     
                if (username == 'admin' && password == '1234'|| 
                    username == 'john' && password =='qwerty' ) 
                        {
                            alert(`Hello ,${username}`)   
                        }
                        else {alert("Invalid username or password")}
                    }
                
















    // if((username == admin && password == 1234)) 
// if(password == null){
//     alert("Password is required")
// }