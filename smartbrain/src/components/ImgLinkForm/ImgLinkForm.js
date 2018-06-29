import React from 'react';
import './ImgLinkForm.css';

const ImgLinkForm = ({myInputChange, mySubmit}) => {
	return (
		<div className="formBox">
			<form>
				<h3>Enter an image URL and submit for maaaaagic...</h3>
				<input type="input" onChange={myInputChange}/>
				<button onClick={mySubmit}>
					Detect
				</button>
			</form>
		</div>
	)
}

export default ImgLinkForm;