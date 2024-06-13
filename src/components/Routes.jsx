import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function RoutesNav({ routes }) {
	const location = useLocation();
	const [scheme, setScheme] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches && 'dark');

	const handleDarkmode = (e) => {
		const root = document.documentElement;
		const currentScheme = scheme === 'dark' ? 'light' : 'dark';
		setScheme(currentScheme);

		if (currentScheme === 'dark') {
			root.style.setProperty('color', 'rgba(255, 255, 255, 0.87)');
			root.style.setProperty('background-color', '#242424');
			root.style.setProperty('--main-color', 'rgba(255, 255, 255, 0.87)');
			root.style.setProperty('--main-bgcolor', '#242424');
			root.style.setProperty('--sub-color', 'rgba(151, 147, 147, 0.3)');
			root.style.setProperty('color-scheme', 'dark');
		} else {
			root.style.setProperty('color', '#213547');
			root.style.setProperty('background-color', '#ffffff');
			root.style.setProperty('--main-color', '#213547');
			root.style.setProperty('--main-bgcolor', '#ffffff');
			root.style.setProperty('--sub-color', 'rgba(255, 255, 255, 0.199)');
			root.style.setProperty('color-scheme', 'light');
		}
	};

	return (
		<nav className='main-nav'>
			<ul>
				{routes.map(({ path, caption }) => (
					<li key={path}>
						{/* prettier-ignore */}
						<Link className={'/' + path === location.pathname ? "current" : ""} to={path}>
              { caption }
            </Link>
					</li>
				))}
			</ul>

			<section>
				<button onClick={handleDarkmode}>Dark</button>
				{/* <Popup {...CharsPopup.args}>문자모음</Popup>
        <Popup {...QuestionPopup.args}>질문모음</Popup>
        <Popup {...LinkPopup.args}>링크모음</Popup> */}
			</section>
		</nav>
	);
}
