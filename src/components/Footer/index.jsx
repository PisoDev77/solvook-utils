import { useNavigate } from 'react-router-dom';
import '../../styles/Footer.css';
import JSON from './JSONIcon';
import CBS from './CBSIcon';
import Additional from './AdditionalIcon';
import UiComponents from './UiComponentsIcon';
import { useState } from 'react';

export default function Footer() {
	const navigate = useNavigate();

	const [visible, setVisible] = useState(true);

	return (
		<footer>
			<nav className={'footer-nav ' + (visible ? '' : 'close')}>
				{visible ? (
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
						<button onClick={() => setVisible(false)}>{'>'}</button>
					</ul>
				) : (
					<button onClick={() => setVisible(true)}>{'<'}</button>
				)}
			</nav>
			<div className='wrapper'></div>
		</footer>
	);
}
