let arr = ['React', 'Vue', 'Angular'];
function copySorted(arr){
    const clone = arr.slice()
    return clone.sort()
}
let sorted = copySorted(arr);

console.log(sorted); // Angular, React, Vue
console.log(arr); // React, Vue, Angular (no changes)