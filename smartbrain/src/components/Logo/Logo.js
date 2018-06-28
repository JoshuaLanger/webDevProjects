import React, {Component} from 'react';
import Tilt from 'react-tilt'
import './Logo.css';

class Logo extends Component {
	render() {
		return (
			<Tilt className="Tilt" options={{ max : 25 }} style={{ height: 250, width: 250 }} >
				<div className="Tilt-inner"> 👽 </div>
			</Tilt>
		)
	}
}

export default Logo;