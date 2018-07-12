import React from 'react';

class SignIn extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			pswd: ''
		}
	}
	onEmailChange = (event) => {
		this.setState({email: event.target.value})
	}
	onPswdChange = (event) => {
		this.setState({pswd: event.target.value})
	}
	onSubmitSignIn = () => {
		fetch('http://localhost:3000/signin', {
			method: "POST",
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				email: this.state.email,
				pswd: this.state.pswd
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