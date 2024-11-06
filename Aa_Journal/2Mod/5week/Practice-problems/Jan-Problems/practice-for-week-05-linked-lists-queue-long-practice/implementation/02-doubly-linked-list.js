// Node class is implemented for you, no need to look for bugs here!
class DoublyLinkedNode {
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
        this.length = 0;
    }

    addToHead(val) {
        // There are bugs in this method! Fix them!!!

        // Add node of val to head of linked list
        let newNode = new DoublyLinkedNode(val);

        if (this.length >= 1) {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }

        this.length++;

        // Write your hypothesis on the time complexity of this method here
    }

    addToTail(val) {
        let newNode = new DoublyLinkedNode(val)
        this.length ++
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            let oldTail = this.tail
            this.tail = newNode
            oldTail.next = newNode
            newNode.prev = oldTail
        }
    }

    removeFromHead() {
        if(!this.length) return undefined

        let oldHead = this.head
        this.head = oldHead.next
        if(this.head) this.head.prev = null
        this.length --
        console.log(oldHead.value);
        return oldHead.value

        // Write your hypothesis on the time complexity of this method here
    }

    removeFromTail() {
        if(!this.length) return undefined
        this.length --
        let oldTail = this.tail
        this.tail = oldTail.prev
        if(this.tail) this.tail.next = null;
        return oldTail.value
    }

    peekAtHead() {
        if(!this.length) return undefined
        return this.head.value
        // Return value of head node

        // Your code here

        // Write your hypothesis on the time complexity of this method here
    }

    peekAtTail() {
        if(!this.length) return undefined
        return this.tail.value
    }
}

module.exports = {
    DoublyLinkedList,
    DoublyLinkedNode
}
