function *boo(x) {
	console.log("start");
	const a = yield x;
	return a;
}
function PromiseLike(cb) {
	cb();
}
new PromiseLike((resolve, reject) => {
	resolve("aaa");
})

yieldContinuation(function*(){
	var v1=yield function(k){
			new Promise(function(resolve,reject){
					setTimeout(function(){
							resolve('Hello');
					},1500);
			}).then(k);
	};

	console.warn(v1);

	var v2=yield function(k){
			new Promise(function(resolve,reject){
					setTimeout(function(){
							resolve('World');
					},1500);
			}).then(k);
	};

	console.warn(v2);
});