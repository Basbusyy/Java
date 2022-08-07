const product1 = { name: 'Coke', price: 18, size: '500mL' };

const product2 = product1;
product2.name = 'Pepsi';
product2.price = 19;

console.log(product1); // *  coke 18 500ml
console.log(product2); // ** pepsi 19 500ml
console.log(product1 === product2); // *** pepsi 19 500ml