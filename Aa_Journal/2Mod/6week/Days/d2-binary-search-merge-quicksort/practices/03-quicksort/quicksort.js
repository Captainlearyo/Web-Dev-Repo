function quicksort(arr) {

  // Check if the input is length 1 or less
  if(arr.length <= 1) return arr
    // If so, it's already sorted: return

  // Pick the first value as the pivot
let pivot = arr[0]
let leftArr = []
let rightArr =[]
  // Orient the pivot so that...
      // every number smaller than the pivot is to the left
      // every number larger (or equal) than the pivot is to the right
  for (let i = 1; i < arr.length; i++) {
    if(arr[i] <= pivot)  leftArr.push(arr[i])
   else rightArr.push(arr[i])

  }

  // Recursively sort the left
  const leftSort = quicksort(leftArr);
  // Recursively sort the right
  const rightSort = quicksort(rightArr);
  // Return the left, pivot and right in sorted order
  return [...leftSort, pivot, ...rightSort];
}


module.exports = [quicksort];
