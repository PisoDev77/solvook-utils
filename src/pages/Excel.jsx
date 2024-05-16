import { useState } from 'react';

import './Excel.css';
import { Options } from '../components/Excel/';

const panels = {
	Options: Options,
};

export default function Excel() {
	const [panel, setPanel] = useState('Excel');
	const [page, setPage] = useState(null);

	const handleChange = (e) => {
		const _panel = e.target.value;
		const _page = panels[_panel];
		setPanel(panel);
		setPage(<_page />);
	};

	return (
		<acrticle className='excel'>
			<nav>
				<label>
					<input type='radio' value='Options' checked={panel === 'Options'} onChange={handleChange} />
					5지선다
				</label>
			</nav>
			{page ?? '선택 선택'}
		</acrticle>
	);
}
