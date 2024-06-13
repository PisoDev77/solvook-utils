import { useState } from 'react';

import Routes from './Routes';

export default function PageList({ isMobile, routes }) {
	const [isPageListOpen, setIsPageListOpen] = useState(false);

	const handlePageList = () => {
		setIsPageListOpen(!isPageListOpen);
	};

	return (
		<>
			<button className='page-list' onClick={handlePageList}>
				LIST
			</button>
			<div className='page-list-modal'>
				{isPageListOpen && (
					<>
						<button className='close' onClick={handlePageList}>
							X
						</button>
						<Routes routes={routes} isMobile={isMobile} handlePageList={() => setIsPageListOpen(false)} />
					</>
				)}
			</div>
		</>
	);
}
