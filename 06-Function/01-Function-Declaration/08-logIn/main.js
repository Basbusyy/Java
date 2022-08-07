function login(username, password) {
    if (username == 'admin' && password == 'P@ssw0rd') {
        alert('Login successful');
    } else {
        alert('Login unsuccessful!');
    }
}

console.log(login('bas', 'P@ssw0rd'));