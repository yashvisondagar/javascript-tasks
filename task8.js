const task3 = [
    { name: 'Romit', age: '24' },
    { name: 'Gopal', age: '23' },
    { name: 'Nutan', age: '22' },
    { name: 'Karan', age: '21' },
    { name: 'Viraj', age: '20' },
  ];
  //using an object map and iterating
  const result = task3.map((obj, i) => ({
    id: i + 1,
    ...obj,
  }));
  
  console.log(result);
  