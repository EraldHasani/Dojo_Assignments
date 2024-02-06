class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }

    addFront(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        return this.head;
    }

    removeFront() {
        if (!this.head) {
            return null; // If the list is empty, return null
        }
        const removedNode = this.head;
        this.head = this.head.next;
        return removedNode;
    }

    display() {
        let currentNode = this.head;
        let result = "";
        while (currentNode) {
            result += currentNode.data.toString();
            if (currentNode.next) {
                result += ", ";
            }
            currentNode = currentNode.next;
        }
        return result;
    }
}

// Example usage:
const SLL1 = new SLL();
SLL1.addFront(76);
SLL1.addFront(2);
console.log(SLL1.display()); // Output: "2, 76"
SLL1.addFront(11.41);
console.log(SLL1.display()); // Output: "11.41, 2, 76"
