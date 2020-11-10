class SingleNode {
	value?: string;
	next?: SingleNode;
	perv?: SingleNode;
	constructor(value: string) {
		this.value = value;
	}
}
class List {
	defaultHead: SingleNode = {
		value: "head",
		next: undefined,
		perv: undefined,
	}
	head: SingleNode = this.defaultHead;
	current?: SingleNode;
	setHead(head: string) {
		this.head = new SingleNode(head);
	}
	clear() {
		this.head = this.defaultHead;
	}
	insertAfter(target: string, element: string) {
		this.current = this.head;
		while(this.current?.value !== target ) {
			this.current = this.current?.next;
		}
		const beforeNext = this.current.next;
		this.current.next = new SingleNode(element);
		this.current.next.perv = this.current;
		if (beforeNext) {
			this.current.next.next = beforeNext;
		} else {
			this.current.next.next = this.head;
		}
	}
	delete(target: string) {
		this.current = this.head;
		while(this.current?.value !== target) {
			this.current = this.current?.next;
		}
		(this.current.perv as any).next = this.current.next;
		(this.current.next as any).perv = this.current.perv;
		this.current = undefined;
	}
	display(order: string) {
		const payload: SingleNode[] = [];
		this.current = this.head;
		while(this.current?.value && payload.length < 100) {
			payload.push(this.current);
			this.current = this.current?.next;
		}
		console.log(order, payload);
		return payload;
	}
	copy() {
		let head = this.head;
		const payload: SingleNode = {};
		while(head.value) {
			payload.value = head.value;
			payload.next = head.next;
			payload.perv = head.perv;
			if (head.next) {
				head = head.next;
			}
		}
		return payload;
	}
}

const list = new List();
const headNode = "a";
const node1 = "b";
const node2 = "c";
const node3 = "d";
const node4 = "e";
const node5 = "f";
list.setHead(headNode);
list.insertAfter(headNode, node1);
list.insertAfter(node1, node2);
list.display("1");
list.delete(node1);
list.display("2");