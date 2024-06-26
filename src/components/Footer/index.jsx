import { useNavigate } from 'react-router-dom';
import '../../styles/Footer.css';
import JSON from './JSONIcon';
import CBS from './CBSIcon';
import Additional from './AdditionalIcon';

export default function Footer({ routes }) {
	const navigate = useNavigate();

	return (
		<footer>
			<nav className='footer-nav'>
				<ul>
					<li onClick={() => navigate('/json')}>
						<JSON />
					</li>
					<li onClick={() => navigate('/cbs')}>
						<CBS />
					</li>
					<li onClick={() => navigate('/additional')}>
						<Additional />
					</li>
				</ul>
			</nav>
		</footer>
	);
}
