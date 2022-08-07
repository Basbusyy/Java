let a = 1;
let b = 2;
let c = a++;
console.log(a,b,c) // A=2 B=2 C=1
let d = ++c;
console.log(d) // D=2
let e = ++d + d++ + d;
console.log(a,b,c,d,e) // A=2 B=2 C=2 D=4 E=10
