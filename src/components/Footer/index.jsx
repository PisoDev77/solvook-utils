import { useNavigate } from 'react-router-dom';
import '../../styles/Footer.css';
import JSON from './JSONIcon';
import CBS from './CBSIcon';
import Additional from './AdditionalIcon';
import UiComponents from './UiComponentsIcon';

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
					<li onClick={() => navigate('/uicomponents')}>
						<UiComponents />
					</li>
				</ul>
			</nav>
		</footer>
	);
}
