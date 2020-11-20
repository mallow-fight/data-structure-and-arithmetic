"use strict";
// const promise = new Promise((resolve, reject) => {
// 	reject("bjb");
// }).finally(() => {
// 	console.log("end");
// });
// const value = promise.then(res => {
// 	console.log("res: " + res);
// }).then(res1 => {
// 	console.log("res1: " + res1);
// }).catch(e => {
// 	console.log("error: " + e);
// })
// console.log("value: " + Object.prototype.toString.call(value));
// console.log("------");
// Promise.all([
// 	Promise.resolve("aaa"),
// 	Promise.resolve("bbb"),
// 	Promise.resolve("ccc"),
// ]).then(res => console.log("promise all res: " + JSON.stringify(res)))
// 	.catch(e => console.log(e))
// Promise.reject("bbb").then(() => {
// 	Promise.resolve("cc").then(res => {
// 		console.log(res)
// 	})
// }).catch(() => {
// 	Promise.resolve("aa").then(res => {
// 		console.log(res)
// 	})
// })
// const a = async () => {
// 	try {
// 		const res = await Promise.reject("aaa");
// 		const res1 = await Promise.resolve("bbb");
// 		console.log(res, "***");
// 	} catch (error) {
// 		console.log("error" + error);
// 	}
// }
// a();
