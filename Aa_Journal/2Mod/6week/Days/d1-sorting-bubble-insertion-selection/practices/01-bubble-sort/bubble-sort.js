
// function bubbleSort(arr) {
//   let swapped = true;
//   while (swapped) {
//     swapped = false;

//     for (let i = 0; i < arr.length - 1; i++) {
//       if (arr[i] > arr[i+1]) {
//         let temp = arr[i];
//         arr[i] = arr[i+1];
//         arr[i+1] = temp;
//         //[arr[i], arr[i+1]] = [arr[i+1], arr[i]];
//         swapped = true;
//         console.log(arr.join(","));
//       }
//     }
//     if (!swapped) return arr;
//   }

//   //return arr;

// }
function bubbleSort(arr) {

for(let i = 0; i < arr.length; i++) {
let tmp = arr[i];

if (arr[i] > arr[i+1]) {
  arr[i] = arr[i+1];
  arr[i+1] = tmp;
  i = -1
 //console.log(arr.join(","));
}

}
  console.log(arr.join(","));

}


  // If you get to the end of the array and no swaps have occurred, return

  // Otherwise, repeat from the beginning


module.exports = bubbleSort;
