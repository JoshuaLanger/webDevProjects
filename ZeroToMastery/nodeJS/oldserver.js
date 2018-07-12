const http = require('http');

const server = http.createServer((request, response) => {
	response.setHeader('Content-Type', 'application/json');
	const user = {
		name: 'Josh',
		teacher: 'Andrei',
		hobby: [
			'reading',
			'drawing',
			'world domination'
		]
	}
	response.end(JSON.stringify(user));
});

server.listen(3000);