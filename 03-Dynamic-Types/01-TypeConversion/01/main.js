let a = undefined;
String(a)
let d = a;
console.log(d)
let b = 2;
String(b)
let e = b
console.log(e)
let c = a++;
String(c)
let f = c;
console.log(f)

// A = เป็น NaN เพราะว่าเป็น undefined 
// B = เป็น 2 เพราะ number = string
// C = เป็น NaN เพราะ number = string