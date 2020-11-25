function debounce(fn: any, delay: number = 1000) {
	let timer: any;
	return (...args: any) => {
		clearTimeout(timer);
		timer = setTimeout(() => {
			fn(...args);
		}, delay);
	}
}

const bz = debounce((a: number, b: number, c: number) => {
	console.log(a, b, c);
}, 1000);

bz(1, 2, 3);

function throttle(fn: any, limit: number = 1000) {
	let lockTimer: any;
	return (...args: any) => {
		if (!lockTimer) {
			fn(...args);
			lockTimer = setTimeout(() => {
				lockTimer = null;
			}, limit);
		}
	}
}

const bt = throttle((a: number, b: number) => {
	console.log(a, b);
}, 3000);

setInterval(() => {
	bt(3, 4)
}, 1000)