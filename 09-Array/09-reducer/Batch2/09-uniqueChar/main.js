let alphabets = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd'];
/* 
  IF Found Charecter in arr first time
        Push
    Else 
        Dont Push
*/

const result = alphabets.reduce((acc,char)=>{
    if(!acc.includes(char)){            // Flase = never have it before 
            acc.push(char)
    } 
    return acc
},[])
result//? 

// ///// MY SET
// const mySet = new Set(alphabets)
// const uniqueChar = Array.from(mySet)
// uniqueChar//?
// mySet//?
// expected result: ['a', 'b', 'c', 'e', 'd']