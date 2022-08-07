let names = ['Jack', 'John', 'Bill', 'John', 'Rick', 'Bill', 'John'];
// INPUT = ARRAY 
// OUTPUT = OBJECT
let result = names.reduce(function(acc,item,index,array){    
 
    ///// ADD PROPERTY TO OBJECT
    ////// Do Logic 
         /* if current name already exits 
                add value +1
        ELSE 
            add new propeerty and set value = 1 */

            ///Return accumalator for next loop

            /// ##### 1
    //   let currentKey = acc[item]
    //   if(!currentKey){
    //     acc[item] =  1
    //   }else{
    //     acc[item] = acc[item] + 1
    //   }
    // #### 2
    acc[item] = acc[item] ? acc[item] +1 : 1
        return acc
},{})
// expected result: {Jack: 1, John: 3, Bill: 2, Rick: 1}
result//?