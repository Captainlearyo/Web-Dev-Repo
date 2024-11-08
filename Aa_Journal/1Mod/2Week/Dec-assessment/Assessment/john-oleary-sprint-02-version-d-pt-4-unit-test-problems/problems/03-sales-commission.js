/*******************************************************************************
This quarter, your team manager is awarding commission to anyone who
closes a sale worth $15,000 or more! The commission amount will be 10% of the
value of their largest sale. Anyone who does not make this large of a sale will
receive the base commission of $500.

Write a function `salesCommission(arr)` that takes an array of objects
containing salesperson names and their largest sale, and returns the total
amount of commission money that needs to be paid out to the team.

Example:

salespeople = [
  { name: "Susan", largestSale: 3000 },
  { name: "Brianna", largestSale: 20000 },
  { name: "Dwayne", largestSale: 13000 },
  { name: "Delilah", largestSale: 26000 },
  { name: "Fernando", largestSale: 8000 },
];

console.log(salesCommission(salespeople)); // 6100
*******************************************************************************/

function salesCommission(salespeople) {
    // Your code here
    let sum = 0
    for(let key of salespeople){
      //console.log(key['largestSale'])
      if(key['largestSale'] > 15000){
        sum += (key['largestSale'] * .10)
      }else{
        sum += 500
      }

    }
    return sum
}
salespeople = [
  { name: "Susan", largestSale: 3000 },
  { name: "Brianna", largestSale: 20000 },
  { name: "Dwayne", largestSale: 13000 },
  { name: "Delilah", largestSale: 26000 },
  { name: "Fernando", largestSale: 8000 },
];
console.log(salesCommission(salespeople)); // 6100
/*****************DO NOT MODIFY ANYTHING UNDER THIS LINE**********************/
  try {
    module.exports = salesCommission;
  } catch (e) {
    module.exports = null;
  }
