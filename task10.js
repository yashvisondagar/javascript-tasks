// Original array for ascending order
const array1 = [1, -1, 20, 100, 24];
// Create a copy of array1 using slice(), then sort in ascending order (a - b)
const ascendingOrder = array1.slice().sort((a, b) => a - b);
console.log("Ascending order:", ascendingOrder);





// Original array for descending order
const array2 = [1, -1, 20, 100, 24];
// Create a copy of array2 using slice(), then sort in descending order (b - a)
const descendingOrder = array2.slice().sort((a, b) => b - a);
console.log("Descending order:", descendingOrder);
