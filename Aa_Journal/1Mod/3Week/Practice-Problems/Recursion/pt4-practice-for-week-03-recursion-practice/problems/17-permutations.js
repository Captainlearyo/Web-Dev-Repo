/***********************************************************************
Write a recursive method permutations(array) that calculates all the
permutations of the given array. For an array of length n there are n! different
permutations. So for an array with three elements we will have 3 * 2 * 1 = 6
different permutations.

Examples:

permutations([1, 2]) // [[1, 2], [2, 1]]
permutations([1, 2, 3]) // [[1, 2, 3], [1, 3, 2],
                        // [2, 1, 3], [2, 3, 1],
                        // [3, 1, 2], [3, 2, 1]]
***********************************************************************/
const remove = (array, el) => [...array.slice(0, array.indexOf(el)),
                              ...array.slice(array.indexOf(el) + 1)];

const permutations = (array) => {
  if(array.length <= 2) return array.length === 2
  ? [array, [array[1], array[0]]]
  : array;
  return array.reduce((acc, el) => [...acc, ...permutations(remove(array, el))
                                                  .map((sub) => sub.concat(el))], []);
};

console.log(permutations([1,2,3]))
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = permutations;
} catch (e) {
  module.exports = null;
}
