import { Parallax } from '../../components/Parallax/Parallax';
import { Contact1 } from './Contact1';

const contactSections = [<Contact1 key={0} />];

export const ContactPage = () => {
	return (
		<>
			<Parallax sections={contactSections} />
		</>
	);
};
