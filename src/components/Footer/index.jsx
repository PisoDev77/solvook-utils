import { useNavigate } from 'react-router-dom';
import '../../styles/Footer.css';
import { useState } from 'react';
import JSON from './JSONIcon';
import CBS from './CBSIcon';
import Additional from './AdditionalIcon';

export default function Footer({ routes }) {
	const [idx, setIdx] = useState(0);
	const navigate = useNavigate();

	const handleClick = (num) => {
		navigate(routes[tmp].path);
	};

	return (
		// prettier-ignore
		<footer className='footer-nav'>
			<nav><ul>
				<li onClick={() => {navigate('json');}}>
					<JSON />
				</li>
				<li onClick={() => {navigate('CBS');}}>
					<CBS />
				</li>
				<li onClick={() => {navigate('additional');}}>
					<Additional />
				</li>
			</ul></nav>
		</footer>
	);
}
