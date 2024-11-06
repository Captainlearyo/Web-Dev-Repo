// Week 1 - Friday
//Lecture notes 10/27/22
// let num = 100;
// let isBig = num >= 100;
// let isSmall = num < 100;
// console.log(isBig || isSmall);

// function stringChanger(word, operation){
//     let reverse = ('')
//     for(let i=word.length-1; i>=0; i--){
//    reverse.push(word[i])
//      console.log(reverse)
//    return reverse
//  }
// }

//console.log(stringChanger("foo", "reverse"))
// Most expensive Groceries

// butter: $1
// eggs: $2
// milk: $3
// bread: $4
// cheese: $5
function checkPrice(item) {
    if  (item === 'butter') return 1
    if  (item === 'eggs') return 2
    if  (item === 'milk') return 3
    if  (item === 'bread') return 4
    if  (item === 'cheese') return 5
    }

    function costOfGroceries(groceries) {
       //declare a sum variable to hold our return
      let sum = 0
      //iterate over the array to checkPrice on each item
      for (let i = 0; i < groceries.length; i++) {
          //add the return value of checkPrice to our running sum total
          sum += checkPrice(groceries[i])
      }

      return sum
    }
    function mostExpensiveGroceries(groceriesList) {
            let highestCostIndex = -1
          let highestCost = 0

        for (let i = 0; i < groceriesList.length; i++) {
          let currentList = groceriesList[i]
          let currentListCost = costOfGroceries(currentList)

          if (currentListCost > highestCost) {
            highestCostIndex = i
            highestCost = currentListCost
          }
         }

          return highestCostIndex
    }


    // TESTS
    // DO NOT MODIFY ANYTHING BELOW THIS LINE

    const groceriesA = ['cheese', 'butter', 'eggs'];
    const groceriesB = ['eggs', 'milk', 'bread', 'bread'];
    const groceriesC = ['cheese', 'bread'];
    const groceriesD = ['eggs', 'butter'];

    costOfGroceries(groceriesA);  // 8
    costOfGroceries(groceriesB);  // 13
    costOfGroceries(groceriesC);  // 9
    costOfGroceries(groceriesD);  // 3

    mostExpensiveGroceries([groceriesA, groceriesB, groceriesC, groceriesD]);

    let score = 0;

    if (costOfGroceries(groceriesA) === 8) score++;
    if (costOfGroceries(groceriesB) === 13) score++;
    if (costOfGroceries(groceriesC) === 9) score++;
    if (costOfGroceries(groceriesD) === 3) score++;

    if (mostExpensiveGroceries([groceriesA, groceriesB, groceriesC, groceriesD]) === 1) score++;
    if (mostExpensiveGroceries([groceriesA, groceriesD]) === 0) score++;
    if (mostExpensiveGroceries([groceriesA, groceriesD, groceriesC]) === 2) score++;

    console.log("You have scored " + score + "/7 points.");
