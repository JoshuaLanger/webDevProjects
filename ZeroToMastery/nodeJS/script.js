const arr = require('./script2.js').largeArr;

let sum = 0;
for (let i = 0; i < arr.length; i++) {
	sum += arr[i];
}
console.log(sum);