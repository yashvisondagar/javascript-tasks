const input = [
    {
        number: 1,
        label: 'Romit',
        shift: 'morning',
        amount: 20000,
        stand: ['abc']
    },
    {
        number: 2,
        label: 'pooja',
        shift: 'night',
        amount: 10000,
        stand: ['abc','mno','xyz']
    },
    {
        number: 1,
        label: 'Romit',
        shift: 'morning',
        amount: 20000,
        stand: ['abc', 'mno', 'qwer']
    },
    {
        number: 3,
        label: 'Romit',
        shift: 'morning',
        amount: 10000,
        stand: ['ryt','uyi','pou']
    },
    {
        number: 2,
        label: 'Romit',
        shift: 'night',
        amount: 30000,
        stand: ['abc']
    },
    {
        number: 2,
        label: 'pooja',
        shift: 'night',
        amount: 25000,
        stand: ['abc', 'adad','asdad']
    },
    {
        number: 3,
        label: 'gopal',
        shift: 'morning',
        amount: 8700,
        stand: ['abc','ddf','sdfds']
    },
    {
        number: 3,
        label: 'gopal',
        shift: 'night',
        amount: 20000,
        stand: ['abc']
    },
    {
        number: 4,
        label: 'smit',
        shift: 'morning',
        amount: 95000,
        stand: ['abc','dfdsfs','dsfsf']
    },
    {
        number: 3,
        label: 'gopal',
        shift: 'night',
        amount: 25000,
        stand: ['abc']
    }
  ];
  
 // made a dummy object to store for further use
  const dummy = {};
  
  //iterating loop over array
  input.forEach(item => {
    // Generating unique key to number label and shift only as amt and stand are not const 
    const key = `${item.number}-${item.label}-${item.shift}`;
    
    // If key doesn't exist in aggregated, initialize it with og values
    if (!dummy[key]) {
        dummy[key] = {
            number: item.number,
            label: item.label,
            shift: item.shift,
            amount: 0,
            stand: []
        };
    }
    // drop in dummy gather
    dummy[key].amount += item.amount;
    
   // concat values keeping unique key 
    dummy[key].stand = [...new Set([...dummy[key].stand, ...item.stand])];
  });
  
  // Convert dummy object back to an array
  const output = Object.values(dummy);
  
  console.log(output);
  