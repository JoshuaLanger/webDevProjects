const express = require('express');
const bodyParser = require('body-parser');
const app = express();

/*MIDDLEWARE*/
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

/* ROUTES */
app.get('/', (req, res) => {
	res.send('I am root');
});
app.get('/api', (req, res) => {
	const data = {
		'one': 1,
		'two': 2
	}
	res.send(data);
})
app.post('/', (req, res) => {
	console.log(req.body);
	res.send('Success!');
});

app.listen(3000);