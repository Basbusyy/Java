let flattened = [
    [0, 1],
    [2, 3],
    [4, 5]
  ];

  function flatarray(array){
    let flattenedArray = array.reduce((acc,item,index)=>{
            acc.push(...item)
            return acc
    },[])
    return flattenedArray
  }

  flatarray(flattened)//? 
//   arr.reduce(fn, init)