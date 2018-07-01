import React from 'react';

const SignIn = ({myRouteChange}) => {
	return (
		<div className="center">
			<form>
				<label htmlFor='user'>Username: </label>
					<input type="text" name="user"/><br />
				<label htmlFor='pass'>Password: </label>
					<input type="password" name='pass'/><br />
				<button 
					type="submit" 
					onClick={() => myRouteChange('home')}>
						Sign In
				</button>
			</form>
		</div>
	)
}

export default SignIn;