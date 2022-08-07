let str = 'I live in Thailand';
let lowerCase = str.toLowerCase(); 
const arrChar = lowerCase.split("")
arrChar //?

const result = arrChar.reduce(function(acc,item){
  let foundValue = acc[item]
    if(item.trim() !== ""){

    if(foundValue){
        acc[item] +=1
    }else  {
        acc[item] =1
    }
    acc[item] = acc[item] ? acc[item] +1 : 1
   } 
   return acc
},{})
result //?