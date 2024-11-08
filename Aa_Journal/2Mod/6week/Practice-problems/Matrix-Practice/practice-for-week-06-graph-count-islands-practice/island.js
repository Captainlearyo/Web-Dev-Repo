function getNeighbors(row, col, matrix) {
  let neighbors = [];
  console.log(row, col);

  // Check top
  if(row > 0 && matrix[row - 1][col]){
    neighbors.push([row - 1, col])
  }
  // Check top right
  if(row > 0 && col < matrix[0].length - 1 && matrix[row - 1][col + 1]){
    neighbors.push([row - 1, col + 1])
  }
  // Check right
  if(col < matrix[0].length - 1 && matrix[row][col + 1]){
    neighbors.push([row, col + 1])
  }
  // Check bottom right
  if(row < matrix.length - 1 && col < matrix[0].length - 1 && matrix[row + 1][col + 1]){
    neighbors.push([row + 1, col + 1])
  }

  // Check bottom
  if(row < matrix.length - 1 && matrix[row + 1][col]){
    neighbors.push([row + 1, col])
  }
  // Check bottom left
  if(row < matrix.length - 1 && col > 0 && matrix[row + 1][col - 1]){
    neighbors.push([row + 1, col - 1])
  }
  // Check left
  if(col > 0 && matrix[row][col -1]){
    neighbors.push([row, col - 1])
}
  // Check top left
  if(row > 0 && col > 0 && matrix[row - 1][col - 1]){
    neighbors.push([row - 1, col - 1])
  }
  //console.log(neighbors);
  return neighbors;
}


function countIslands(matrix) {

// Create a visited set to store visited nodes
  const visited = new Set();
  let count = 0

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {

      if(!visited.has(matrix[i][j].toString()) && matrix[i][j] === 1 ){
        count ++
        console.log(count);
        visited.add(matrix[i][j].toString())
        console.log(visited);
      }
    }
  }
  console.log(count);
return count
  // Initialize count to 0
  // Iterate through all indices in matrix
    // If an index contains a 1 and has not been visited,
    // increment island count and start traversing neighbors
      // DO THE THING (increment island count by 1)
      // Initialize a stack with current index
      // Add stringified version of current index to the visited set
      // While stack contains elements
        // Pop element from stack
        // Get valid neighbors of current element
        // Iterate over neigbors
          // If neighbor has not been visited
            // Add neighbor to stack
            // Mark neighbor as visited
  // Return island count

  // Your code here
}

// Uncomment the lines below for local testing
const matrix = [
                [1,1,1,0,0],
                [0,1,1,0,1],
                [0,1,1,0,1]
              ]

 console.log(getNeighbors(1, 1, matrix)); // [[0, 0], [0, 1], [0, 2], [1, 2], [2, 1], [2, 2]]
// console.log(getNeighbors(2,4, matrix)) // [[1,4]]

// const matrix2 = [
//                     [1,1,1,0,1],
//                     [0,0,0,0,1],
//                     [1,0,0,1,0],
//                 ]

// console.log(countIslands(matrix)) // 2
// console.log(countIslands(matrix2)); // 3

module.exports = [countIslands, getNeighbors];
