import React from 'react';

const Register = ({myRouteChange}) => {
	return (
		<div className="center">
			<form>
				<label htmlFor='name'>Name: </label>
					<input type="text" name="name"/><br />
				<label htmlFor='user'>Username: </label>
					<input type="text" name="user"/><br />
				<label htmlFor='pass'>Password: </label>
					<input type="password" name='pass'/><br />
				<button 
					type="submit" 
					onClick={() => myRouteChange('home')}>
						Sign In
				</button>
				<p onClick={() => myRouteChange('register')}>
						Register
				</p>
			</form>
		</div>
	)
}

export default Register;