// Insertion Sort out-of-place
// Do not modify the original array
function insertionSort(arr) {

  // Copy the original array
  const copy = arr.slice(); // => [...arr]
  // Create an array to store the sorted values
  const sorted = [];
  // While the array is not empty:
  while (copy.length) {
    // - make sure you have a console.log(sorted.join(',')) as your first line in the while loop
    console.log(sorted.join(','));
    // - Pop a value from the array
    const val = copy.pop();
    // - Create a new spot at the end of the array with null to help with comparisons
    sorted.push(null);
    // - Walk through the sorted array in reverse order
    let i = sorted.length - 1;

    while (i > 0) {
      // - Check if the value to the left is smaller than the new value
      if (sorted[i-1] <= val) {
        // - If so, you've reached the insertion point so exit the loop
        break;
      } else {
        // - If not shift the value to the right by 1 and continue
        //                           i
        sorted[i] = sorted[i-1]; // [1,5,6,7] -> 1
        i--;
      }
    }
    // - Insert the unsorted value at the break point
    sorted[i] = val;
  }
  // Return the sorted array
  return sorted;

  // Your code here
}

/*
  Pseudocode:

  Copy the original array
  Create an array to store the sorted values
  While the array is not empty:
  - make sure you have a console.log(sorted.join(',')) as your first line in the while loop
  - Pop a value from the array
  - Create a new spot at the end of the array with null to help with comparisons
  - Walk through the sorted array in reverse order
  - Check if the value to the left is smaller than the new value
  - If so, you've reached the insertion point so exit the loop
  - If not shift the value to the right by 1 and continue
  - Insert the unsorted value at the break point
  Return the sorted array
  */

  // Your code here
// In-place Insertion Sort
// Mutates the original array
function insertionSortInPlace(arr) {
  /*
  Pseudocode:

  Set a pointer dividing the array into sorted and unsorted halves
  Repeat while the unsorted half is not empty:
  - make sure you have a console.log(sorted.join(',')) as your first line in the while loop
  - Grab the first value from the unsorted half
  - For each value starting from the divider,
  - Check if the value to the left is smaller than the unsorted value
  - If so, you've reached the insertion point so exit the loop
  - If not shift the value to the right by 1 and continue
  - Insert the unsorted value at the break point
  - Increment the dividing pointer and repeat
  Return the mutated array
  */

  // Your code here
}

module.exports = [insertionSort, insertionSortInPlace];
