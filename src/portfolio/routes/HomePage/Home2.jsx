import profile from '/profilepicture.png';
import cv from '/RamiroQuesadaCV.pdf';

export const Home2 = () => {
	return (
		<>
			<div className="home2container">
				<div className="home2left">
					<div className="aboutHead">
						<div className="aboutHeadText">
							<h2>About Me</h2>
						</div>
						<div className="lines">
							<span className="topLine"></span>
							<span className="bottomLine"></span>
						</div>
					</div>
					<div className="aboutBody">
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Culpa ex nostrum itaque eum incidunt soluta
							maxime. Voluptatibus corrupti recusandae iste
							maiores molestiae, odio in unde adipisci nobis
							consectetur impedit ehunt!
						</p>
						<div className="aboutLinks">
							<a
								href="https://github.com/ramessj"
								target="_blank"
								rel="noreferrer">
								<div>GitHub</div>
							</a>
							<a
								href="https://www.linkedin.com/in/ramiro-quesada-p%C3%A9rez-5796a3126"
								target="_blank"
								rel="noreferrer">
								<div>LinkedIn</div>
							</a>
						</div>
						<a
							href={cv}
							download="Ramiro Quesada CV"
							target="_blank"
							rel="noreferrer">
							<button className="aboutCurriculum">
								Download CV
							</button>
						</a>
					</div>
				</div>
				<div className="home2right">
					<div>
						<img className="profileImg" src={profile} alt="" />
					</div>
				</div>
			</div>
		</>
	);
};
