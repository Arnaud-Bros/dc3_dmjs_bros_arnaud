function removeDuplicates(arr) {
  return Array.from(new Set(arr));
}

let numbers = [1, 2, 3, 3, 4, 4, 5];
let uniqueNumbers = removeDuplicates(numbers);
console.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5]