import { useState } from 'react';
import { darkMode as DarkIcon, lightMode as LightIcon } from '../SVG/Darkmode';

export default function Darkmode() {
	const [scheme, setScheme] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches && 'dark');
	const handleDarkmode = () => {
		const root = document.documentElement;
		const currentScheme = scheme === 'dark' ? 'light' : 'dark';
		setScheme(currentScheme);

		const styles = {
			dark: { '--main-color': '#f8f7f4', '--main-bgcolor': '#352f36', '--sub-color': '#ffffff33' },
			light: { '--main-color': '#213547', '--main-bgcolor': '#fbfff4', '--sub-color': '#ffffffa8' },
		};

		Object.entries(styles[currentScheme]).forEach(([key, value]) => {
			root.style.setProperty(key, value);
		});
	};
	return <button onClick={handleDarkmode}>{scheme === 'dark' ? <DarkIcon /> : <LightIcon />}</button>;
}
