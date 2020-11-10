class Queen {
	// 行号，列号
	field: [number, number][] = [];
	constructor(width: number) {
		for(let i = 0; i < width; i++) {
			for(let j = 0; j < width; j++) {
				this.field.push([i, j]);
			}
		}
	}
	stack: [number, number][] = [];
	explore(start = this.field[0]) {
		this.stack.push(start);
	}
	display() {
		console.log(this.field)
	}
}

const queen = new Queen(4);

queen.display();