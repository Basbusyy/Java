โค้ดทั้งสองให้ผลลัพธ์ออกมาเหมือนกันหรือไม่

```js
let i = 0;
while (++i < 5) alert(i);
```
// ไม่เหมือน  ++i = i=4
            i++ = i=5
```js
let i = 0;
while (i++ < 5) alert(i);
```