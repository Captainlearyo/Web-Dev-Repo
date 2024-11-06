function quadraticBiggestFish(fishies) {
  // Code goes here ...
  let bigF = fishies[0]
  for (let i = 0; i < fishies.length; i++) {
    let  fish1 = fishies[i]
    for (let j = i; j < fishies.length; j++) {
      let fish2 = fishies[j]
      if(fish1.length < fish2.length){
      bigF = fish2
      //console.log(bigF);
      }
    }
  }
  return bigF
}



function nlognBiggestFish(fishies) {
  fishies.sort((a, b) =>{
    return b.length - a.length;
  });
  return fishies[0]
}


function linearBiggestFish(fishies) {
  let biggestFish = fishes[0];
for (let fish of fishes) {
  if (fish.length > biggestFish.length) biggestFish = fish;
}

return biggestFish;

}


tilesArray = ["up", "right-up", "right", "right-down", "down", "left-down", "left", "left-up"]
function slowDance(direction, tilesArray) {
  // Code goes here ...
 // console.log(direction);
  for (let i = 0; i < tilesArray.length; i++) {
    if(tilesArray[i] === direction)
    return i
  }

}


tilesObj = {
  "up": 0,
  "right-up": 1,
  "right": 2,
  "right-down": 3,
  "down": 4,
  "left-down": 5,
  "left": 6,
  "left-up": 7
}
function fastDance(direction, tilesObj) {
  // Code goes here ...
return tilesObj[direction]
}




const fishies = ['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish',
'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh'];
// => "fiiiissshhhhhh";


// console.log(quadraticBiggestFish(fishies));
// console.log(nlognBiggestFish(fishies));
// console.log(slowDance("up", tilesArray)); // 0
// console.log(slowDance("right-down", tilesArray)); // 3);
console.log(fastDance("up", tilesObj)); // 0
console.log(fastDance("right-down", tilesObj)); // 3
