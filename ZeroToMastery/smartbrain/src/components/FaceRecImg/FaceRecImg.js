import React from 'react';
import './FaceRecImg.css';

const FaceRecImg = ({myImgUrl, myBox}) => {
	return (
		<div className='faceImg'>
			<img
				id="faceImg"
				src={myImgUrl} 
				alt="" 
				width='500px'
				height='auto'
			/>
			<div 
				className='boundingBox'
				style={{
					top: myBox.top,
					left: myBox.left,
					width: myBox.width,
					height: myBox.height,
				}}
			></div>
		</div>
	)
}

export default FaceRecImg;