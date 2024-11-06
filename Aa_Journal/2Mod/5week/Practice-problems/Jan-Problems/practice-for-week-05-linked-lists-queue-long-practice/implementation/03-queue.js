const { SinglyLinkedNode } = require("./01-singly-linked-list");

class Queue {

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    enqueue(val) {
        let newNode = new SinglyLinkedNode(val)
        this.length ++
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
            return this.length;
        }

        this.tail.next = newNode
        this.tail = newNode

        return this.length


    }

    dequeue() {
        if(!this.head) return null

       let oldHead = this.head;
       this.head = oldHead.next;

          if(!this.next) this.tail = null;

          this.length --
          return oldHead.value;
      }
}

module.exports = {
    Queue,
    SinglyLinkedNode
}
