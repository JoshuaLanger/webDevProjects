import React from 'react';
import Tilt from 'react-tilt';
import brain from './brain.png';
import './Logo.css';

const Logo = () => {
	return (
		<Tilt className="Tilt" options={{ max : 55 }} >
			<div className="Tilt-inner">
				<img src={brain} alt='brain' />
			</div>
		</Tilt>
	)
}

export default Logo;