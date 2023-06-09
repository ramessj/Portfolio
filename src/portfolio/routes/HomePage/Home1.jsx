// import { useSelector } from "react-redux";
// import { getTexts } from "../../../helpers/getTexts";

import { motion } from 'framer-motion';

export const Home1 = () => {
	// const {lang} = useSelector( state => state.ui )

	// const texts = getTexts('home1', lang);

	return (
		<>
			<div className="home1container">
				<div>
					<div></div>
					<div>
						<h3>Im a Programmer</h3>
					</div>
					<div></div>
				</div>

				<div>
					<h2 className="helloh2">
						Hello
						<motion.span
							className="hellodot"
							style={{ background: '#FFF', borderRadius: '50%', marginLeft: '1rem', marginRight:'1rem', alignSelf: 'end' }}
							animate={{
								y: ['20%', '-185%', '-200%', '-185%', '20%'],
								width: ['2.5rem', '2rem', '1.5rem', '2rem', '2.5rem'],
								height: ['1.5rem', '1.9rem', '2rem',  '1.9rem', '1.5rem'],
							}}
							transition={{
								repeat: Infinity,
								duration: 1,
							}}></motion.span>
					</h2>

					<h2>I am</h2>
					<h2>Ramiro</h2>
				</div>
			</div>
		</>
	);
};
