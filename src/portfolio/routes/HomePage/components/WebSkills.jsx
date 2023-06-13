import js from '../../../../assets/webSkills/javascript.png'
import jsBW from '../../../../assets/webSkills/javascriptBW.png'

export const WebSkills = () => {

	return (
		<div className="technologies">
			<div className="techContainer">
				<div className="tech">
					<img src={jsBW} alt="JavaScript" className='techLogoBW'/>
					<img src={js} alt="JavaScript" className='techLogo'/>

				</div>
				<div className="techName">JavaScript</div>
			</div>
			
		</div>
	);
};
