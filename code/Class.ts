class A {
	static namename: string = "aaa";
	foo = () => {
		console.log("foo", this.foo, this.baz);
	}
	baz() {
		console.log("baz", this.foo, this.baz);
	}
	render() {
		console.log("render", this.foo, this.baz);
	}
	testContext() {
		const _this = this;
		// 箭头函数只能放在正确上下文的同级，或者作为同级函数的参数调用才能取到正确的上下文
		const BB = () => {
			console.log("BB context: ");
			console.log(this);
		}
		function B(ars: any) {
			// 如果直接执行的话，非箭头函数的this取的是B的上下文，即undefined
			// ars是箭头函数就会取B外面的上下文，即A的this
			// 这也是为什么在react中写事件回调的时候要使用箭头函数
			ars();
			// 可强行使用call来绑定上下文，但是原生回调事件中肯定获取不到_this
			ars.call(_this);
			BB();
			const CC = () => {
				console.log(this);
			}
			CC(); // 这个地方取的就是B的上下文，即undefined
		}
		B(function bb() { console.log(this as any) });
		B(() => console.log(this))
	}
}
const a = new A();
a.foo(); // foo [Function foo] [Function baz]
a.baz(); // baz [Function foo] [Function baz]
a.render(); // render [Function foo] [Function baz]
a.testContext(); // undefined A { foo: [Function] }

class D extends A {
	test = () => {

	}
}
const d = new D();
console.log(d); // D { foo: [Function], test: [Function] }
console.log(d.__proto__.__proto__); // A { baz: [Function], render: [Function], testContext: [Function] }
