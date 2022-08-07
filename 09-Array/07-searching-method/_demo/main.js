const arr = [
    {species : 'cat' , name : 'Cha-com'},
    {species : 'dog' , name : 'O-leaeng'},
    {species : 'bird' , name : 'jib'},
    {species : 'cat' , name : 'Cha-Chak'},
    {species : 'bird' , name : 'mali'}
    ]
    // const result = arr.find(item => item.species == 'bird')
    const result = arr.filter((item)=>item.species == 'bird')
    
    console.log(result) 


