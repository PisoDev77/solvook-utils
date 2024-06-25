import { useNavigate } from 'react-router-dom';
import '../../styles/Header.css';
import AMF from '../SVG/AMF';
import DarkMode from './Darkmode';

export default function Header() {
	const navigate = useNavigate();

	return (
		<header className={`main-header`}>
			<div
				style={{ display: 'flex', justifyContent: 'center' }}
				onClick={() => {
					navigate('/');
				}}
			>
				<AMF />
			</div>
			<DarkMode />
		</header>
	);
}
