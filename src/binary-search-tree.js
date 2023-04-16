const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
	constructor() {
		this.root.data = null;
		this.root.leftBranch = { data: null };
		this.root.rightBranch = { data: null };
	}

	root() {
		return this.root.data !== null ? this.root : null;
	}

	add(data) {
		if (this.root.data === null) this.root.data = data;
		else {
			let next = data > this.root.data ? this.root.rightBranch : this.root.leftBranch;
			while (next.data !== null) next = data > next.data ? next.rightBranch : next.leftBranch;
			next.data = data;
			next.leftBranch = { data: null };
			next.rightBranch = { data: null };
		}
	}

	find(data) {
		if (data === this.root.data) return this.root;
		let next = data > this.root.data ? this.root.rightBranch : this.root.leftBranch;
		while (next.data !== null) {
			if (data === next.data) return next;
			next = data > next.data ? next.rightBranch : next.leftBranch;
		}
		return null;
	}

	has(data) {
		return this.find(data) ? true : false;
		// if (data === this.root.data) return true;
		// let next = this.root;
		// while (next.data !== null) {
		// 	next = data > next.data ? next.rightBranch : next.leftBranch;
		// 	if (data === next.data) return true;
		// }
		// return false;
	}

	min(node = this.root) {
		if (!this.root) return null;
		let next = node;
		while (next.leftBranch.data !== null) next = next.leftBranch;
		return next.data;
	}

	max(node=this.root) {
		if (!this.root) return null;
		let next = node;
		while (next.rightBranch.data !== null) next = next.rightBranch;
		return next.data;
	}

	remove(data) {
		throw new NotImplementedError('Not implemented');
		// let parent = this.root;
		// let next = parent;
		// if (data !== next.data) {
		// 	next = data > parent.data ? parent.rightBranch : parent.leftBranch;
		// 	while (true) {
		// 		if (data === next.data) break;
		// 		parent = next;
		// 		next = data > next.data ? next.rightBranch : next.leftBranch;
		// 	}
		// }
		
		// if (next.rightBranch.data === null && next.leftBranch.data === null) next.data = null;
		// else if (next.rightBranch.data !== null && next.leftBranch.data !== null) {
		// 	parent.leftBranch.data === next.data ? parent.leftBranch = this.min(next.rightBranch) : parent.rightBranch = this.min(next.rightBranch);
		// }
		// else if (next.rightBranch.data === null || next.leftBranch.data === null) {
		// 	if (parent.leftBranch.data === next.data) parent.leftBranch = next.leftBranch.data === null ? next.rightBranch : next.leftBranch;
		// 	else if (parent.rightBranch.data === next.data) parent.rightBranch = next.leftBranch.data === null ? next.rightBranch : next.leftBranch;
		// }
	}
}

module.exports = {
  BinarySearchTree
};