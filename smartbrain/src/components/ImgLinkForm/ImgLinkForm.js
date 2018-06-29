import React from 'react';
import './ImgLinkForm.css';

const ImgLinkForm = ({myInputChange, mySubmit}) => {
	return (
		<div>
			<p>Enter an image URL and submit for maaaaagic...</p>
			<div className="formBox">
				<input type="input" onChange={myInputChange}/>
				<button onClick={mySubmit}>Detect</button>
			</div>
		</div>
	)
}

export default ImgLinkForm;