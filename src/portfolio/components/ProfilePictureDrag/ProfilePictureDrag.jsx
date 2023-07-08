import profile from '/profilepicture.png';

import './ProfilePictureDrag.css';

export const ProfilePictureDrag = () => {
	return (
		<div className='imgDragContainer'>
			<img className='profileImg' src={profile} alt='Ramiro Quesada' />
		</div>
	);
};
