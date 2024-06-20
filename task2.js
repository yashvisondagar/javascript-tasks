const elements = [
  { path: 'employeeNumber', section: 1, row: 1, order: 1 },
  { path: 'citizenId', section: 1, row: 2, order: 1 },
  { path: 'maritalStatus', section: 1, row: 2, order: 2 },
  { path: 'religion', section: 2, row: 1, order: 2 },
  { path: 'nationality', section: 1, row: 3, order: 1 },
  { path: 'startDate', section: 1, row: 3, order: 3 },
];

// Sorting elements based on section, row, and order in ascending order
elements.sort((a, b) => {
  // Compare by section first
  if (a.section !== b.section) {
    return a.section - b.section; //retunr in ascending section
  }
  // If sections are the same, compare by row
  else if (a.row !== b.row) {
    return a.row - b.row; //return in ascending row
  }
  // If sections and rows are the same, compare by order
  else {
    return a.order - b.order; // retunr in ascending order
  }
});

console.log(elements);
