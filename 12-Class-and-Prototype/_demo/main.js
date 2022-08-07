class User {
    name;
    password;
    role;
    constructor(name, password, role) {
      console.log('constructor');
      this.name = name;
      this.password = password;
      this.role = role || 'normal - user';
    }
  
    login(password) {
      console.log('login: ' + password);
    }
  
    changePassword(newPasswod) {
      console.log('Change Password');
    }
    loggingName(){
      console.log(this.name)
    }
  }
  
  const a = new User('a', '1234', 'admin');
  const b = new User('b', '5678');
  const c = new User('c', '9101112');
  // console.log(a);
  // console.log(b);
  // console.log(c);
  // a.login('1234');
  
  const aa = {
    name: 'a',
    password: undefined,
    role: undefined,
  
    login(password) {
      console.log('login');
    },
    changePassword(newPasswod) {
      console.log('Change Password');
    }
  };
  // console.log(aa);
  
  class Admin extends User {
      updateProduct(productData){
          console.log('Update Product')
      }
  }
  class Customer extends User{
      // constructor(...args){ //['Cust', '12', 'customer'] send to super under this line
      //     super(...args)
      // }    
      constructor(rank, ...args){
          super(...args);
          this.rank = rank;
      }
      createOrder(cart){
          console.log('Create Order')
      }
      login(phoneNumber){
          console.log('Customer Login')
      }
      logCustName(){
          super.loggingName()
      }
  
  }   
  
  const admin = new Admin();
  console.log(admin)
  admin.login();
  
  const cust = new Customer('VIP','Cust', '12', 'customer')
  cust.login(); 

  
  const arr =[1,2,3];
  console.log(arr);
  ////////////////////////////////////
  