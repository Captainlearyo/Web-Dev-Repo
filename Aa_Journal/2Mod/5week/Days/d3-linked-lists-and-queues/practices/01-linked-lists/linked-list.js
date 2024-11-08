class LinkedListNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0
  }

  addToHead(val) {
    const newNode = new LinkedListNode(val);
    this.length ++;

    if(!this.head){
      this.head = newNode
    }else{
      newNode.next = this.head;
      this.head = newNode;
    }


  }

  addToTail(val) {
    const newNode = new LinkedListNode(val);
    if(!this.head){
      this.head = newNode
    }else{
      let currentNode = this.head

      while(currentNode.next){
        currentNode = currentNode.next;
      }
      currentNode.next = newNode
    }
    this.length ++
  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} -> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

module.exports = LinkedList;
