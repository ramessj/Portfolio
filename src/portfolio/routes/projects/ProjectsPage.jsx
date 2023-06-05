import { Parallax } from "../../components/Parallax/Parallax";
import { Projects1 } from "./Projects1";
import { Projects2 } from "./Projects2";
import { Projects3 } from "./Projects3";
import { Projects4 } from "./Projects4";
import { Projects5 } from "./Projects5";
import { Projects6 } from "./Projects6";

const projectsSections = [<Projects1 key={0} />,  <Projects2 key={1} />,  <Projects3 key={2} />,  <Projects4 key={3} />,  <Projects5 key={4} />,  <Projects6 key={5} />,  ]

export const ProjectsPage = () => {
	return (
		<>
			<Parallax sections={projectsSections} />
		</>
	);
};
