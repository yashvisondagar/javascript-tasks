const input = [
    { name: "abc", value: 20 },
    { name: "pqr", value: 10 },
    { name: "xyz", value: 30 },
    { name: "abc", value: 50 },
    { name: "pqr", value: 30 },
    { name: "opp", value: 10 }
  ];
  
  // Using Array.reduce to accumulate values based on 'name'
  const output = input.reduce((accum, current) => {
      // Find if there's already an object with the same 'name' in accum
      const existingItemIndex = accum.findIndex(item => item.name === current.name);
      
      if (existingItemIndex !== -1) {
          // If found, update the 'value' of the existing item by adding current 'value'
          accum[existingItemIndex] = {
              name: current.name,
              value: accum[existingItemIndex].value + current.value
          };
      } else {
          // If not found, push a new object with current 'name' and 'value' to accum
          accum.push({ name: current.name, value: current.value });
      }
      
      // Return the updated accumulator for the next iteration
      return accum;
  }, []);
  
  console.log(output);
  