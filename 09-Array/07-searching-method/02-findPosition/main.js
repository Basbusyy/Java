const alphabets = ['a', 'b', 'a', 'c', 'a', 'd'];

/////   #1 For in

// let result =[]
// for(let index in alphabets){

//     if (alphabets[index]=='a'){
//         result.push(index)
//     }
// }console.log(result)


// #2 index of
/* 1st search ==> found ==> know index [1]
   2nd searcch ==> starting from index [1st search]
  */ 
 let  result=[]
 let foundIndex;
 do{
    foundIndex = alphabets.indexOf('a')
    if(foundIndex !==1){
        result.push(foundIndex)
        foundIndex= alphabets.indexOf('a',foundIndex+1)
    }
 }while(foundIndex !== -1)
 console.log(result)
//    console.log(alphabets.indexOf('a'));
// expexted result: [0, 2, 4]
