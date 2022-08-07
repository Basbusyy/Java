const filterOutOdds =(...number) => {
    let resultNums = number.filter(function(acc,item,index,arr)       
{   
    if(item %2 !== 0 ){
            return true
        }else{
            return false
        }}
        )//?
        return resultNums
    };
    //// Another  Method
    // console.log(filterOutOdds(3,4,5,6,7,8,9,10))

    // const filterOutOdds = (...nums) => nums.filter((cur) => cur % 2 == 0);

    // console.log(filterOutOdds(1, 2, 3, 4, 5, 6, 11, 22, 33, 22, 1213, 4, 5));