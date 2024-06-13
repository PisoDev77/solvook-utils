import { useState } from 'react';
import { darkMode as DarkIcon, lightMode as LightIcon } from '../SVG/Darkmode';

export default function Darkmode() {
	const [scheme, setScheme] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches && 'dark');
	const handleDarkmode = () => {
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
	return <button onClick={handleDarkmode}>{scheme === 'dark' ? <DarkIcon /> : <LightIcon />}</button>;
}
