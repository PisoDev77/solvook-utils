import { useState } from 'react';
import './CBS.css';

import CopyCBS from '../components/CBS/copy';
import QuoteCBS from '../components/CBS/quote';

export default function CBS() {
	const tabs = {
		copy: { caption: 'CBS 복사', element: <CopyCBS /> },
		quote: { caption: '따옴표 변환', element: <QuoteCBS /> },
	};
	const [tab, setTab] = useState('quote');

	const handleTabs = (e) => {
		setTab(e.target.dataset.tab);
	};

	return (
		<article>
			<nav id='CBS-tabs'>
				<ul>
					{Object.entries(tabs).map(([name, { caption }]) => (
						<li
							data-tab={name}
							className={name === tab ? 'current' : ''}
							key={'tab-' + name}
							onClick={handleTabs}
						>
							{caption}
						</li>
					))}
				</ul>
			</nav>
			{tabs[tab].element}
		</article>
	);
}
