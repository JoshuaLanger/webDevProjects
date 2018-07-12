import React from 'react';

class Register extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			pswd: '',
			name: ''
		}
	}
	onEmailChange = (event) => {
		this.setState({email: event.target.value})
	}
	onPswdChange = (event) => {
		this.setState({pswd: event.target.value})
	}
	onNameChange = (event) => {
		this.setState({name: event.target.value})
	}
	onSubmitRegister = () => {
		fetch('http://localhost:3000/register', {
			method: "POST",
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				name: this.state.name,
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
		return (
			<div className="center">
				<div>
					<label htmlFor='name'>Name: </label>
						<input 
							type="text" 
							name="name"
							id='name'
							onChange={this.onNameChange}
						/><br />
					<label htmlFor='email'>Email: </label>
						<input 
							type="text" 
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
						onClick={this.onSubmitRegister}>
							Register
					</button>
				</div>
			</div>
		)
	}
}

export default Register;