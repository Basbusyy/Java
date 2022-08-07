function max(a,b,c,d){
    if(a==undefined){
        return undefined;
    }
    // ใส่แค่a
    if (b===undefined){
        return a;
    }

 //   ใส่แค่a,b
    if (c===undefined){
        return a>b ? a : b
    }
     //   ใส่แค่a,b,c
    if(d===undefined )
        {
           return Math.max(a,b,c) // return maximum Value
        }
}       return Math.max (a,b,c,d)
console.log(max())
console.log(max(2))
console.log(max(3, 1))
console.log(max(7, 3, 9, 2))