const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
	constructor() {
		this.tail = new ListNode(null);
		this.head = new ListNode(null);
		this.head.next = this.tail;
	}

  getUnderlyingList() {
		return this.head;
  }

	enqueue(value) {
		let newNode = new ListNode(value);
		this.tail.next = newNode;
		this.tail = newNode;

		// this.queue[this.tail++] = new ListNode(value);
		// if (this.head.value === null) this.head.value = value;
		// else {
		// 	let next = this.head.next;
		// 	while (next !== null) next = next.next;
		// 	next.value = value;
		// }
  }

	dequeue() {
		let head = this.head;
		this.head = this.head.next;
		return head;
		// if (this.tail === this.head) return undefined;
		// let element = this.queue[this.head];
		// delete this.queue[this.head++];
		// return element;
  }
}

module.exports = {
  Queue
};
