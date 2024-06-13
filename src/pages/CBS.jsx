import { useState } from 'react';
import '../styles/CBS.css';

import CopyCBS from '../components/CBS/copy';
import QuoteCBS from '../components/CBS/quote';
import TableCBS from '../components/CBS/table';
import ContextCBS from '../components/CBS/context';

export default function CBS() {
	const tabs = {
		copy: { caption: 'CBS 텍스트 복사', element: <CopyCBS /> },
		quote: { caption: 'CBS 표 복사', element: <TableCBS /> },
		table: { caption: '따옴표 변환', element: <QuoteCBS /> },
		context: { caption: '서식 복사', element: <ContextCBS /> },
	};
	const [tab, setTab] = useState('copy');

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
