// const showModal = alert;
// showModal("Execute modal"); // * alert Execute modal  เพราะ สั่งให้ showModal alert แล้วไปกำหนดคำที่จะให้โชว์ขึ้นมา
const showModal = alert(); // เพราะไม่ได้กำหนดค่าใน alert 
showModal("Execute modal");

