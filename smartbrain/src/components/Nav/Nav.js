import React from 'react';
import './Nav.css';

const Nav = ({myRouteChange}) => {
	return (
		<div className="nav">
			<a onClick={() => myRouteChange('signin')} href="">Sign Out</a>
		</div>
	)
}

export default Nav;