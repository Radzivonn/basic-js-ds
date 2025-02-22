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
		if (this.head.value === null) this.head.value = value;
		else if(this.tail.value === null) this.tail.value = value;
		else {
			let newNode = new ListNode(value);
			this.tail.next = newNode;
			this.tail = newNode;
		}
  }

	dequeue() {
		let head = this.head;
		this.head = this.head.next;
		return head.value;
  }
}

module.exports = {
  Queue
};
