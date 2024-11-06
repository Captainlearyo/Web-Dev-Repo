const { BinarySearchTree, TreeNode } = require("./binary-search-tree.js");
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

function findMinBST(rootNode) {
  if (rootNode.left) {
    return findMinBST(rootNode.left);
  }

  return rootNode.val;
}

function findMaxBST(rootNode) {
  if (rootNode.right) {
    return findMaxBST(rootNode.right);
  }

  return rootNode.val;
}

function findMinBT(rootNode) {
  let min = rootNode.val;

  if (rootNode.left) min = Math.min(min, findMinBT(rootNode.left));
  if (rootNode.right) min = Math.min(min, findMinBT(rootNode.right));
  return min;
}

function findMaxBT(rootNode) {
  let max = rootNode.val;

  if (rootNode.left) max = Math.max(max, findMaxBT(rootNode.left));
  if (rootNode.right) max = Math.max(max, findMaxBT(rootNode.right));
  return max;
}

function getHeight(rootNode) {
  if (!rootNode) return -1;
  if (!rootNode.left && !rootNode.right) return 0;

  let left = 1 + getHeight(rootNode.left);
  let right = 1 + getHeight(rootNode.right);

  if (left > right) return left;
  else return right;
}

function balancedTree(rootNode) {
  if (!rootNode) return -1;

  let queue = [rootNode];

  while (queue.length) {
    const curr = queue.shift();

    if (Math.abs(getHeight(curr.left) - getHeight(curr.right)) <= 1) {
      if (curr.left) queue.push(curr.left);
      if (curr.right) queue.push(curr.right);
    } else {
      return false;
    }
  }
  return true;
}

function countNodes(rootNode) {
  // Your code here
  if (!rootNode) return 0;
  const stack = [rootNode];
  let count = 0;
  while (stack.length) {
    const curr = stack.pop();

    count++;

    if (curr.left) stack.push(curr.left);
    if (curr.right) stack.push(curr.right);
  }
  return count;
}

function getParentNode(rootNode, target) {
  // Your code here
  if (!rootNode) return;
  if (rootNode.val === target) return null;

  const queue = [rootNode];

  while (queue.length) {
    const curr = queue.shift();
    if (curr.left) {
      if (curr.left.val === target) {
        return curr;
      }
    }

    if (curr.right) {
      if (curr.right.val === target) {
        return curr;
      }
    }
    if (curr.left) queue.push(curr.left);
    if (curr.right) queue.push(curr.right);
  }
  return undefined;
}

function inOrderPredecessor(rootNode, target) {
  let current = rootNode;
  let stack = [];
  let predecessor = null;

  while (true) {

    if (current) {
      stack.push(current);
      current = current.left;

    } else if (!current && stack.length > 0) {
      current = stack.pop();

      if (current.val === target) {
        if (!predecessor) return null;
        return predecessor.val;
      }
      predecessor = current;
      current = current.right;

    } else {
      break;
    }
  }
  //!!END

}

function deleteNodeBST(rootNode, target) {
  // Do a traversal to find the node. Keep track of the parent
  // Undefined if the target cannot be found
  // Set target based on parent
  // Case 0: Zero children and no parent:
  //   return null
  // Case 1: Zero children:
  //   Set the parent that points to it to null
  // Case 2: Two children:
  //  Set the value to its in-order predecessor, then delete the predecessor
  //  Replace target node with the left most child on its right side,
  //  or the right most child on its left side.
  //  Then delete the child that it was replaced with.
  // Case 3: One child:
  //   Make the parent point to the child
}

module.exports = {
  findMinBST,
  findMaxBST,
  findMinBT,
  findMaxBT,
  getHeight,
  countNodes,
  balancedTree,
  getParentNode,
  inOrderPredecessor,
  deleteNodeBST,
};
