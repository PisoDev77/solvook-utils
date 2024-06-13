import { useState, useEffect } from 'react';

import '../../styles/Header.css';

import Routes from './Routes';
import Darkmode from './Darkmode';
import PageList from './PageList';

export default function Header({ routes }) {
	const [isMobile, setIsMobile] = useState(false);

	const checkMobileSize = () => {
		setIsMobile(window.innerWidth <= 768);
	};

	useEffect(() => {
		// Set initial value
		checkMobileSize();

		// Add event listener for window resize
		window.addEventListener('resize', checkMobileSize);

		// Clean up event listener on component unmount
		return () => {
			window.removeEventListener('resize', checkMobileSize);
		};
	}, []);

	return (
		<header className={`main-header ${isMobile && 'reverse'}`}>
			{!isMobile && <Routes routes={routes} />}
			<section className='main-header-buttons'>
				{isMobile && <PageList isMobile={isMobile} routes={routes} />}
				<Darkmode />
			</section>
		</header>
	);
}
