import useQslayer from './useQSlayer';

import NewQSlayer from './NewQSlayer';
import List from './List';
import { useEffect } from 'react';

export default function QSlayer() {
	const { addQ, updateQ, deleteQ, saveQs, getNewQid, qs } = useQslayer();

	useEffect(() => {
		// return () => saveQs();
	}, []);

	return (
		<>
			<NewQSlayer getNewQid={getNewQid} addQ={addQ} />
			<ul className='qslayer-list'>
				{/* prettier-ignore */}
				{qs.map((q) => (
					<li key={'list-no ' + q.qId}>{<div {...q}></div>}</li>
				))}
			</ul>
			<List qs={qs} updateQ={updateQ} deleteQ={deleteQ} />
			<form action='https://www.google.com/search' method='get'>
				<input type='text' name='q' placeholder='구글에서 검색' />
				<button type='submit'>검색</button>
			</form>
			<form action='https://search.naver.com/search.naver' method='get'>
				<input type='text' name='query' placeholder='네이버에서 검색' />
				<button type='submit'>검색</button>
			</form>
		</>
	);
}
