let balance = 100000

for(let i = 0 ; i <10 ; i++){
    balance = balance + balance*(2.5/100)
} 
console.log(balance.toFixed(2))