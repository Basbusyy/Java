let user = prompt("User Name")
if (user === '' || user === null || user.trim() ===''){  
} else {
    if(user == 'codecamp'){
        let password = prompt("Input The Password")
        if(password == '123456'){
            alert(`Welcome , ${user}`) 
        }else{
            alert('Wrong password')
        }
    } else{
        user = 'guest';
        alert(`Welcome , ${user}`) 
    } 
}  
