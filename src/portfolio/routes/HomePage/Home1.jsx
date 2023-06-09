// import { useSelector } from "react-redux";
// import { getTexts } from "../../../helpers/getTexts";

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
					<h2>
						Hello <span className="hellodot">.</span>
					</h2>
					<h2>I am</h2>
					<h2>Ramiro</h2>
				</div>
			</div>
		</>
	);
};
