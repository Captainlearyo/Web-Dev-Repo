// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    addToHead(val) {

        let newNode = new SinglyLinkedNode(val);
        this.length ++

        newNode.next = this.head
        this.head = newNode
     return this
    }

    addToTail(val) {
        // There are bugs in this method! Fix them!!!

        // Add node of val to tail of linked list
        let newNode = new SinglyLinkedNode(val);
        this.length ++

        if (!this.head) {
            this.head = newNode;
            return  this;
        }

        let curr =  this.head;
        while (curr.next) {
          curr = curr.next;
        }

        curr.next = newNode;



        return  this;

        // Write your hypothesis on the time complexity of this method here
    }

    removeFromHead() {
        if(!this.head) return undefined
        this.length--
        let oldHead = this.head
        this.head = this.head.next

        return oldHead
    }

    removeFromTail() {
        if(!this.head) return undefined
        this.length--
        let curr = this.head
        let prev;
        while(curr.next){
            prev = curr;
            curr = curr.next;
        }
        if (!prev) this.head = null
       else prev.next = null

        return curr

        // Write your hypothesis on the time complexity of this method here
    }

    peekAtHead() {
        if(!this.head) return undefined
        return this.head.value
    }

    print() {
        if(!this.head) return undefined
       let curr = this.head
       while(curr){
        console.log(curr.value);
        curr = curr.next
       }
    }
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}
