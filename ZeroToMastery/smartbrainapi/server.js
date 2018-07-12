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
const register = require('./controllers/register.js');
const signin = require('./controllers/signin.js');
const profile = require('./controllers/profile.js');
const image = require('./controllers/image.js');

const app = express();

/* MIDDLEWARE */
app.use(bodyParser.json());
app.use(cors());

/* ROUTES */
app.get('/', (req, res) => {
	res.send('I am root');
});
app.post('/signin', signin.handleSignIn(db, bcrypt));
app.post('/register', register.handleRegister(db, bcrypt));
app.get('/profile/:id', profile.handleProfileGet(db));
app.put('/image', image.handleImagePut(db));
app.post('/imageurl', (req, res) => image.handleApiCall(req, res));

app.listen(3000, () => {
	console.log(`Listening on port 3000`);
});