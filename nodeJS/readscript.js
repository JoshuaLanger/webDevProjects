const fs = require('fs');

fs.readFile('./test.txt', (err, data) => {
	if (err) throw err;
	else console.log(data);
});