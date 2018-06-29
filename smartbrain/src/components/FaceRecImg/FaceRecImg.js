import React from 'react';
import './FaceRecImg.css';

const FaceRecImg = ({myImgUrl}) => {
	return (
		<div>
			<img
				className='faceImg'
				src={myImgUrl} 
				alt="" 
				width='500px'
				height='auto'
			/>
		</div>
	)
}

export default FaceRecImg;