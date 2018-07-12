import React from 'react';
import './Nav.css';

const Nav = ({isSignedIn, myRouteChange}) => {
	if (isSignedIn) {
		return (
			<div className="nav">
				<p onClick={() => myRouteChange('signout')}>Sign Out</p>
			</div>
		)
	} else {
		return (
			<div className="nav">
				<p onClick={() => myRouteChange('signin')}>Sign In</p>
				<p onClick={() => myRouteChange('register')}>Register</p>
			</div>
		)
	}
}
	

export default Nav;