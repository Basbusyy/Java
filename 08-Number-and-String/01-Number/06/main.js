function random (min,max){
    let random = Math.random() * (max - min)
    let x = min + random;
    return (x=x.toFixed(2));
}
console.log(random(10,100));