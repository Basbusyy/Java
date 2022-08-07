let facts = { numPlanets: 8, yearNeptuneDiscovered: 1846 };
let { numPlanets, yearNeptuneDiscovered } = facts;
console.log(numPlanets); // * 8  เพราะประกาศไว้ ในfacts ทั้งคู่ ส่วนบรรทัดที่2แค่เรียงประโยคใหม่ ไม่ได้มีผลกับตัวแปรที่กำหนดมาแล้ว
console.log(yearNeptuneDiscovered); // **1846