let name = 'John';
function sayHi() {
  alert('Hi, ' + name);
}
name = 'Pete';
sayHi(); // * alert Hi,Pete เพราะมาประกาศ Pete ทับ name ข้างบนซึ่งเป็นการประกาศ global เหมือนกัน