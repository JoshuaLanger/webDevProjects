const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const db = require('knex')({
	client: 'pg',
	connection: {
		host: '127.0.0.1',
		user: 'postgres',
		password: 'MfC1Gp05t',
		database: 'smartbrain-db'
	}
});

const app = express();

/* MIDDLEWARE */
app.use(bodyParser.json());
app.use(cors());

/* ROUTES */
app.get('/', (req, res) => {
	res.json('I am root');
});
app.post('/signin', (req, res) => {
	// Load hash from your password DB.
	const {email, password} = req.body;
	console.log(email);
	res.status(400).json(email);
});
app.post('/register', (req, res) => {
	const {email, name, password} = req.body;
	bcrypt.hash(password, null, null, function(err, hash) {
	    if (err) throw err;
	});
	db('users')
		.returning('*')
		.insert({
		email: email,
		name: name,
		joined: new Date()
	})
		.then(query => {
		res.json(query);
	})
		.catch(err => {
		res.status(400).json('unable to register');
	});
});
app.get('/profile/:id', (req, res) => {
	const {id} = req.params;
	// let found = false;
	if (user) res.json(user);
	else res.status(400).json(`user ${id} not found`);
});
app.put('/image', (req, res) => {
	const {id} = req.params;
	let found = false;
	database.users.forEach(user => {
		if (user.id === id) {
			found = true;
			user.entries++;
			return res.json(`${user.name} has ${user.entries} entries`);
		}
	});
	if (!found) res.status(400).json(`user ${id} not found`);
});

bcrypt.hash("bacon", null, null, function(err, hash) {
    // Store hash in your password DB.
});

app.listen(3000, () => {
	console.log('app is running on port 3000');
});