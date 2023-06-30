import { motion, useDragControls } from 'framer-motion';

import profile from '/profilepicture.png';

import './ProfilePictureDrag.css'

export const ProfilePictureDrag = () => {

	const controls = useDragControls();


	return (
		<motion.div
		className='imgDragContainer'
		initial={{ dragListener: false }}
		drag={true}
		dragControls={controls}
		whileDrag={{ scale: 1.2 }}
		dragSnapToOrigin
		animate={{
			dragListener: true,
		}}
		style={{ touchAction: 'none' }}>
		<motion.img
			className='profileImg'
			src={profile}
			alt='Ramiro Quesada'
		/>
	</motion.div>
	)
}
