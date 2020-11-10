class Stack {
	payload: string[] = [];
	size() {
		return this.payload.length;
	}
	empty() {
		return !!this.payload.length;
	}
	push(target: string) {
		this.payload.push(target);
	}
	pop() {
		return this.payload.pop();
	}
	display() {
		console.log(JSON.stringify(this.payload));
	}
}

const stack = new Stack();
stack.display();
stack.push("a");
stack.push("b");
stack.display();
stack.pop();
stack.display();