function calSummary(salesArray){
    const summaryArray = []
    
    for(let item of salesArray){
        let currentObj={}
        let netPrice = item.price * (1 -(item.discount ?? 0))
        currentObj.netPrice = netPrice
        summaryArray.push(currentObj)

    }
    return summaryArray
}
const sales = [
    { price: 1000, discount: 0.1 },
    { price: 500, discount: 0.05 },
    { price: 100 }
  ];

  console.log(calSummary(sales))