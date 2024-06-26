import SubPages from '../components/SubPages';
import '../styles/page.css';
import Timer from './Timer';

export default function Additional() {
	return (
		<SubPages
			subpages={[
				{ name: 'Timer', path: '/timer' },
				{ name: 'QSlayer', path: '/qslayer' },
			]}
		/>
	);
}
