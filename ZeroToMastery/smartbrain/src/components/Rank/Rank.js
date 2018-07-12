import React from 'react';
import './Rank.css';

const Rank = ({name, entries}) => {
	return (
		<div className='center'>
			<h3>{`${name}, your current rank is ${entries}.`}</h3>
		</div>
	)
}

export default Rank;