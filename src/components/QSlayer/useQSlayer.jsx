import { useState } from 'react';

export default function useQslayer() {
	const [qs, setQs] = useState(JSON.parse(localStorage.getItem('QSlayerStorage')) ?? []);

	const addQ = (newQ) => {
		setQs([newQ, ...qs]);
	};
	const updateQ = (updateQ) => {
		setQs([...qs].map((q) => (q.qId === updateQ.qId ? updateQ : q)));
	};
	const deleteQ = (qId) => setQs([...qs].filter((q) => q.qId !== qId));
	const saveQs = () => {
		localStorage.setItem('QSlayerStorage', JSON.stringify(qs));
	};

	const getNewQid = () => qs.reduce((qId, q) => (q.qId > qId ? q.qId : qId), 0) + 1;

	return { addQ, updateQ, deleteQ, saveQs, getNewQid, qs };
}
