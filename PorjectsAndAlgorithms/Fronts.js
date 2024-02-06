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
        return removedNode.data;
    }

    front() {
        if (!this.head) {
            return null; // If the list is empty, return null
        }
        return this.head.data;
    }
}

// Example usage:
const SLL1 = new SLL();
SLL1.addFront(18);
console.log(SLL1.front());      // Output: 18
console.log(SLL1.removeFront());// Output: 18
console.log(SLL1.front());      // Output: null

















//  class Node {
//     constructor(data, next = null) {
//         this.data = data;
//         this.next = next;
//     }
// }

// class SLL {
//     constructor() {
//         this.head = null;
//     }

//     addFront(value) {
//         const newNode = new Node(value);
//         newNode.next = this.head;
//         this.head = newNode;
//         return this.head;
//     }

//     removeFront() {
//         if (!this.head) {
//             return null; // If the list is empty, return null
//         }
//         const removedNode = this.head;
//         this.head = this.head.next;
//         return removedNode;
//     }
// }

// // Example usage:
// const SLL1 = new SLL();
// SLL1.addFront(18);
// SLL1.addFront(5);
// console.log(SLL1.removeFront()); // Output: Node { data: 5, next: Node { data: 18, next: null } }
// console.log(SLL1.removeFront()); // Output: Node { data: 18, next: null }
// console.log(SLL1.removeFront()); // Output: null (list is empty)















// class Node {
//     constructor(data, next = null) {
//         this.data = data;
//         this.next = next;
//     }
// }

// class SLL {
//     constructor() {
//         this.head = null;
//     }

//     addFront(value) {
//         const newNode = new Node(value);
//         newNode.next = this.head;
//         this.head = newNode;
//         return this.head;
//     }

//     removeFront() {
//         if (!this.head) {
//             return null; // If the list is empty, return null
//         }
//         const removedNode = this.head;
//         this.head = this.head.next;
//         return removedNode;
//     }
// }

// // Example usage:
// const SLL1 = new SLL();
// SLL1.addFront(18);
// SLL1.addFront(5);
// console.log(SLL1.removeFront()); // Output: Node { data: 5, next: Node { data: 18, next: null } }
// console.log(SLL1.removeFront()); // Output: Node { data: 18, next: null }
// console.log(SLL1.removeFront()); // Output: null (list is empty)

