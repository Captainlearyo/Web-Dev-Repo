class DoublyLinkedListNode {
  constructor(val) {
   this.value = val;
   this.next = null;
   this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0
  }

  addToHead(val) {
    const newNode = new DoublyLinkedListNode(val);
    this.length ++
    if(!this.head){
      this.head = newNode
      this.tail = newNode
    }else{
      newNode.next = this.head;
      this.head.prev = newNode
      this.head = newNode
    }
  }

 addToTail(val) {
    // Your code here
    const newNode = new DoublyLinkedListNode(val);
    this.length++;

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  // You can use this function to help debug
  print(){
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} <-> `);
      current = current.next;
    }

    console.log("NULL");
  }
}


module.exports = DoublyLinkedList;
