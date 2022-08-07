let a = undefined;
Boolean(a)
let b = " ";
Boolean(b)
let c = !b;
Boolean(c)
let d = a;
let e = b;
let f = c;
console.log(d) // undefined
console.log(e) // empty string
console.log(f) // false



// - จากโค้ดด้านล่างให้เขียนคำสั่งเพื่อแปลง a, b และ c ให้เป็น Boolean แล้วเก็บไว้ในตัวแปร d, e และ f ตามลำดับ
// - ให้ใช้คำสั่ง console.log เพื่อแสดงค่าตัวแปร d, e และ f
// - ผลลัพธ์ที่ได้เป็นอะไรบ้าง และเพราะอะไร