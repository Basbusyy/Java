const user = {
    email: 'cc@gmail.com',
    isActive: true
  };
  
  user.isActive = false;
  console.log(user); // * alert false bec overwrite on user,isActive outside {}
  user = {};
  console.log(user); // **  Error : assign to constant variable
  