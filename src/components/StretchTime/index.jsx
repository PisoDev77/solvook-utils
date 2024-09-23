import '../../styles/Strectch.css';

import { useState } from 'react';

import { Youtube, Timer } from './Content';

export default function StretchTime() {
	const [tab, setTab] = useState(0);

	const Content = [Youtube, Timer][tab];

	return (
		<article className='stertchtime'>
			<h1 className='a11y-hidden'>Stretch</h1>
			<Tabs setTab={setTab} selectedTab={tab} />
			<Content videoId={'Gve8qR4a3b8?si=Kf6Y_5qvLZ5YYqRy'} />
		</article>
	);
}

function Tabs({ setTab, selectedTab }) {
	return (
		<nav>
			<ul role='tablist'>
				<li role='tab' aria-selected={selectedTab === 0} onClick={() => setTab(0)} tabIndex={0}>
					Tab A
				</li>
				<li role='tab' aria-selected={selectedTab === 1} onClick={() => setTab(1)} tabIndex={0}>
					Tab B
				</li>
			</ul>
		</nav>
	);
}
