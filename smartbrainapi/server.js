const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');

const app = express();

/* TODO - Update login with hash, then check with database */

/* MIDDLEWARE */
app.use(bodyParser.json());

let idCount = 300;
const database = {
	users: [
		{
			id: '100',
			name: 'BillyBob',
			email: 'billybob@gmail.com',
			entries: 0,
			joined: new Date(),
		},
		{
			id: '200',
			name: 'Jean',
			email: 'jean@yahoo.com',
			entries: 0,
			joined: new Date(),
		},
		{
			id: '300',
			name: 'Paul',
			email: 'paul@hotmail.com',
			entries: 0,
			joined: new Date(),
		},
	],
	login: [
		{
			id: '100',
			hash: '',
			email: 'billybob@gmail.com'
		}
	]
}
function searchDatabase(req, res) {
	
}

/* ROUTES */
app.get('/', (req, res) => {
	res.send(database.users);
});
app.post('/signin', (req, res) => {
	// Load hash from your password DB.
	bcrypt.compare("bacon", hash, function(err, res) {
	    // res == true
	});
	bcrypt.compare("veggies", hash, function(err, res) {
	    // res = false
	});
	if (req.body.email === database.users[0].email &&
		req.body.password === database.users[0].password) {
		res.json('Success!');
	} else res.status(400).json('Error signing in');
});
app.post('/register', (req, res) => {
	const {email, name, password} = req.body;
	bcrypt.hash(password, null, null, function(err, hash) {
	    if (err) throw err;
	    console.log(hash);
	});
	database.users.push({
		id: ++idCount,
		name: name,
		email: email,
		password: password,
		entries: 0,
		joined: new Date()
	});
	res.json(database.users[database.users.length-1]);
});
app.get('/profile/:id', (req, res) => {
	const {id} = req.params;
	let found = false;
	database.users.forEach(user => {
		if (user.id === id) {
			found = true;
			return res.json(user);
		}
	});
	if (!found) res.status(400).json(`user ${id} not found`);
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