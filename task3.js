const Elements = [
    { path: 'employeeNumber', section: 1, row: 1, order: 1 },
    { path: 'citizenId', section: 1, row: 2, order: 1 },
    { path: 'maritalStatus', section: 1, row: 2, order: 2 },
    { path: 'nationality', section: 1, row: 3, order: 1 },
    { path: 'startDate', section: 1, row: 3, order: 2 },
    { path: 'religion', section: 2, row: 1, order: 1 },
    { path: 'dayOff', section: 2, row: 2, order: 1 },
    { path: 'site', section: 2, row: 2, order: 2 },
    { path: 'tribe', section: 2, row: 3, order: 1 },
    { path: 'userName', section: 3, row: 1, order: 1 },
  ];
  
  // Object to track the current row number for each section
  const rowTracker = {};
  
  // Mapping over Elements array and updating rows based on section
  const Result = Elements.map((element) => {
    // If the section is encountered for the first time, initialize rowTracker[section] to 1
    if (!rowTracker[element.section]) {
      rowTracker[element.section] = 1; // Start row numbering from 1 for the section
    }
    const newRow = rowTracker[element.section]; // Get the current row number for the section
    rowTracker[element.section]++; // Increment row number for the next element in the same section
    
    // Return a new object with updated 'row' property
    return {
      ...element,
      row: newRow, // Update 'row' property with the current row number for the section
    };
  });
  
  console.log(Result);
  