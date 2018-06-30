const express = require('express');
const bodyParser = require('body-parser');
const app = express();

/*MIDDLEWARE*/
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

/*ROUTES*/
app.get('/', (req, res) => {
	console.log('req query', req.query);
	console.log('req header', req.header);
	res.send('I am root');
});
app.get('/api', (req, res) => {
	const data = {
		'name': 'Data',
		'captain': 'Picard'
	}
	res.send(data);
});
app.post('/api', (req, res) => {
	console.log(req.body);
	res.send('Success!');
});

app.listen(3000);