function linearSearch (arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
};

function binarySearch(arr, target) {

  // Set integers pointing to the high and low range of possible indices
  let low = arr[0];
  let high = arr.length - 1
  // While high and low indices do not overlap...
while(high >= low){
    // Find the midpoint between high and low indices
let mid = Math.floor((high + low)/2);
    // Compare the target value to the midpoint value

    // If the target equals the midpoint...
      // Return the midpoint index
      if(target === arr[mid]) return mid
    // If the target is higher than the midpoint...
      // Move the low pointer to midpoint + 1
      if(target > arr[mid]) low = mid + 1
    // If the target is less than the midpoint...
      // Move the high pointer to midpoint - 1
      if(target < arr[mid]) high = mid - 1
}
  // Return -1 if the loop exits with overlapping pointers
 return -1;
}


module.exports = [linearSearch, binarySearch]
