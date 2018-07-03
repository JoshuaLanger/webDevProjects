const express = require('express');
const bodyParser = require('body-parser');

const app = express();

/* MIDDLEWARE */
app.use(bodyParser.json());

let idCount = 300;
const database = {
	users: [
		{
			id: '100',
			name: 'BillyBob',
			email: 'billybob@gmail.com',
			password: 'shotgun',
			entries: 0,
			joined: new Date(),
		},
		{
			id: '200',
			name: 'Jean',
			email: 'jean@yahoo.com',
			password: 'wycliffe',
			entries: 0,
			joined: new Date(),
		},
		{
			id: '300',
			name: 'Paul',
			email: 'paul@hotmail.com',
			password: 'guitar',
			entries: 0,
			joined: new Date(),
		},
	]
}

/* ROUTES */
app.get('/', (req, res) => {
	res.send(database.users);
});
app.post('/signin', (req, res) => {
	if (req.body.email === database.users[0].email &&
		req.body.password === database.users[0].password) {
		res.json('Success!');
	} else res.status(400).json('Error signing in');
});

app.post('/register', (req, res) => {
	const {email, name, password} = req.body;
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

app.listen(3000, () => {
	console.log('app is running on port 3000');
});

/* GAME PLAN

'/' => res = I am root
'/signin' => POST* = success/fail
'/register' => POST = user
'/profile/:userId' => GET = user
'/image' => PUT = user

*POST signin to hide password from address bar
*/
