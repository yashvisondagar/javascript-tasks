const abc = [
  { id: 1, batchNumber: '11111111' },
  { id: 1, batchNumber: '22222222' },
  { id: 1, batchNumber: '11111111' },
  { id: 1, batchNumber: '22222222' },
  { id: 1, batchNumber: '11111111' },
  { id: 1, batchNumber: '22222222' },
  { id: 1, batchNumber: '333333333' }
];

// Create a Set containing unique batch numbers from the array 'abc'
const batchNumbersSet = new Set(abc.map(item => item.batchNumber));

// Convert Set back to an array using spread operator and filter out '333333333'
const output = [...batchNumbersSet].filter(number => number !== '333333333');

// Output the filtered array of batch numbers
console.log(output);
