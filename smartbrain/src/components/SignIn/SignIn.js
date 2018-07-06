import React from 'react';

class SignIn extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			signInEmail: '',
			signInPswd: ''
		}
	}
	onEmailChange = (event) => {
		this.setState({signInEmail: event.target.value})
	}
	onPswdChange = (event) => {
		this.setState({signInPswd: event.target.value})
	}
	onSubmitSignIn = () => {
		fetch('http://localhost:3000/signin', {
			method: "POST",
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				email: this.state.signInEmail,
				pswd: this.state.signInPswd
			})
		})
		.then(response => response.json())
		.then(user => {
			if (user.id) {
				this.props.loadUser(user);
				this.props.myRouteChange('home');
			}
		});
	}
	render() {
		const {myRouteChange} = this.props;
		return (
			<div className="center">
				<form>
					<label htmlFor='email'>Email: </label>
						<input 
							type="email" 
							name="email"
							id='email'
							onChange={this.onEmailChange}
						/><br />
					<label htmlFor='pswd'>Password: </label>
						<input 
							type="password" 
							name='pswd'
							id='pswd'
							onChange={this.onPswdChange}
					/><br />
					<button 
						type="submit" 
						onClick={this.onSubmitSignIn}>
							Sign In
					</button>
					<p onClick={() => myRouteChange('register')}>Register</p>
				</form>
			</div>
		)
	}	
}

export default SignIn;