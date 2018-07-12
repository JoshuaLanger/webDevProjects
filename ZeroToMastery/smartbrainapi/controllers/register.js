const handleRegister = (db, bcrypt) => (req, res) => {
	const {email, name, pswd} = req.body;
	if (!email || !name || !pswd) {
		return res.status(400).json('incorrect form submission');
	}
	var hash = bcrypt.hashSync(pswd);
	// Begin transaction to update login, then users in one go
	// If one fails, they all fail
	db.transaction(trx => {
		trx.insert({
			hash: hash,
			email: email
		})
		.into('login')
		.returning('email')
		.then(loginEmail => {
			return trx('users')
			.returning('*')
			.insert({
				email: loginEmail[0],
				name: name,
				joined: new Date()
			})
				.then(user => {
				res.json(user[0]);
			})
				.catch(err => {
				res.status(400).json('unable to register');
			});
		})
		.then(trx.commit) // If all goes well, update all tables
		.catch(trx.rollback); // Otherwise, return to last state
	});
}

module.exports = {
	handleRegister: handleRegister
}