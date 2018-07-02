const fs = require('fs');

/* asynchronous */
// fs.readFile('./test.txt', (err, data) => {
// 	if (err) throw err;
// 	console.log(data.toString());
// })

// /* synchronous 
// use if you absolutely need the data ASAP */
// fs.readFileSync('./test.txt', (err, data) => {
// 	if (err) throw err;
// 	console.log(data.toString());
// });

// /* APPEND */
// fs.appendFile('./test.txt', '...needs more encoding', err => {
// 	if (err) throw err;
// });

// /* WRITE */
// fs.writeFile('./new.txt', 'goo goo ga ga', err => {
// 	if (err) throw err;
// });

// /* DELETE */
// fs.unlink('./new.txt', err => {
// 	if (err) throw err;
// });

/* SANTA CHALLENGE */
fs.readFile('./santa.txt', (err, data) => {
	// Start timer, don't stop until end of calculation
	console.time('time');
	let floor = 0;
	if (err) throw err;
	// Read through data one char at a time
	// If <(> (charCode=40), go UP 1 floor. 
	// If <)> (charCode=41), go DOWN 1 floor.
	// ASSUMPTION: These are the only two characters in the file
	data.forEach(char => {
		(char === 40) ? floor++ : floor--;
	});
	//Output floor and end timer
	console.log('Final floor:', floor);
	console.timeEnd('time');

	// QUESTION 2: When does Santa first enter the basement?
	// Start timer, don't stop until end of calculation
	console.time('basement-time');
	// Reset floor
	floor = 0;
	// Read through data one char at a time
	// Loop through data UNTIL floor is -1
	console.log(data.length);
	for (let i = 0; i < data.length; i++) {
		(data[i] === 40) ? floor++ : floor--;
		if (floor < 0) {
			console.log('Santa first reached the position at:', i+1);
			break;
		}
	}
	// Return position of char
	console.timeEnd('basement-time');
});

//Provide 348385-20180702-7a1c12e1 if you are asked to prove you own this account. Don't post this code in a public place.