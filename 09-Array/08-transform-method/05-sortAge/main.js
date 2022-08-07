const arr = [
    { name: 'John', age: 25 },
    { name: 'Leon', age: 26 },
    { name: 'Mick', age: 29 },
    { name: 'Pete', age: 30 },
    { name: 'Mary', age: 28 }
  ];

  // Switch when : a > b : a-b >0
  // Don't switch when : a <= b
arr.sort((a,b) => a.age - b.age  )  //?