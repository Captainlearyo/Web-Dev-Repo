// Merge Sort out-of-place
// Do not modify the original array
function mergeSort(arr) {

  // Check if the input is length 1 or less
    // If so, it's already sorted: return
    if(arr.length <= 1) return arr;

  // Divide the array in half
  const mid = Math.floor( arr.length/2)

  const left = arr.slice(0,mid);
  const right = arr.slice(mid);

  // Recursively sort the left half
  // Recursively sort the right half
  // Merge the halves together and return
  return merge(mergeSort(left), mergeSort(right))
}


// Takes in two sorted arrays and returns them merged into one
function merge(arrA, arrB) {

  // Create an empty return array
 let res = [];
  // Point to the first value of each array
  let a = 0;
  let b = 0;
  // While there are still values in each array...
  while (a < arrA.length && b < arrB.length) {

    // Compare the first values of each array
    // Add the smaller value to the return array
    // Move the pointer to the next value in that array
    if(arrA[a] <= arrB[b]){
      res.push(arrA[a]);
      a ++;
    }else{
      res.push(arrB[b]);
      b ++;
    }
  }
  // Return the return array
  return [...res, ...arrA.slice(a), ...arrB.slice(b)]
}

module.exports = [merge, mergeSort];
