import React from 'react';

const Register = ({myRouteChange}) => {
	return (
		<div className="center">
			<div>
				<label htmlFor='name'>Name: </label>
					<input type="text" name="name"/><br />
				<label htmlFor='user'>Username: </label>
					<input type="text" name="user"/><br />
				<label htmlFor='pass'>Password: </label>
					<input type="password" name='pass'/><br />
				<button 
					type="submit" 
					onClick={() => myRouteChange('home')}>
						Register
				</button>
			</div>
		</div>
	)
}

export default Register;