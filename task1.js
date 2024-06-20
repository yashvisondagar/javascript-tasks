const Elements = [
    { path: "employeeNumber", section: 1, row: 1, order: 1 },
    { path: "citizenId", section: 1, row: 2, order: 1 },
    { path: "maritalStatus", section: 1, row: 2, order: 2 },
    { path: "nationality", section: 1, row: 3, order: 1 },
    { path: "startDate", section: 1, row: 3, order: 2 },
    { path: "religion", section: 2, row: 1, order: 1 },
    { path: "dayOff", section: 2, row: 2, order: 1 },
    { path: "site", section: 2, row: 2, order: 2 },
    { path: "tribe", section: 2, row: 3, order: 1 },
    { path: "username", section: 2, row: 4, order: 1 },
  ];
  
  // Array to store the result
  const Result = [];
  
  Elements.forEach((element, index) => {
    Result.push(element); // Push the current element to the Result array
  
    // Check if the current element's path is "citizenId"
    if (element.path === "citizenId") {
      const copy = { ...element }; // Create a copy of the current element
      copy.row = element.row + 1; // Increment the row of the copy
      copy.order = 1; // Reset the order of the copy to 1
  
      // Loop through remaining elements in Elements array
      for (let i = index + 1; i < Elements.length; i++) {
        // If an element is in the same section as the current element, increment its row and order
        if (Elements[i].section === element.section) {
          Elements[i].row++;
          Elements[i].order++;
        }
      }
  
      Result.push(copy); // Push the modified copy to the Result array
    }
  });
  
  console.log(Result); // Output the Result array
  