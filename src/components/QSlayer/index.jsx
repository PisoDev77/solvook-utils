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
		</>
	);
}
