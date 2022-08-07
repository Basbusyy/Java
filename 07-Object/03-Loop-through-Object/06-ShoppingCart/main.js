const THE_SENTINEL = 'stop'
const cart= {};
function market () {
    cart.list = prompt("Inter list")
    cart.value = prompt("Input Value")
    cart.price = prompt("Input Price")
    cart.discount = prompt("Input Discount")
if(cart.discount = 0){
    delete cart.discount;
}  

}
function calculator(cart){
if(cart.discount){
    cart.price = cart.price - cart.price * (cart.discount / 100);
    delete cart.discount;
}else{
    cart.value * cart.price;
}

}
market();
console.log(cart);
calculator(cart);