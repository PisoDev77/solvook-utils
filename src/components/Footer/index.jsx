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
				<li onClick={() => {navigate('openJSON');}}>
					<JSON />
				</li>
				<li onClick={handleClick}>
					<CBS />
				</li>
				<li onClick={handleClick}>
					<Additional />
				</li>
			</ul></nav>
		</footer>
	);
}
