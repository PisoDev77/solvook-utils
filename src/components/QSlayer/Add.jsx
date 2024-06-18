import { useState, useRef } from 'react';

import { formatDate } from '../Inputs';

export default function Add({ list, setList }) {
	const ref = useRef(null);

	const [newContent, setNewContent] = useState('');

	const handleNewContent = (e) => {
		const inputContent = e.target.value;
		setNewContent(inputContent);
	};

	const addNewContent = () => {
		const newDate = formatDate(new Date());
		const inputContent = ref.current.value;
		setList([{ content: inputContent, reg_date: newDate, update_date: newDate, answer: '' }, ...list]);
	};

	return (
		<section>
			<input ref={ref} type='text' value={newContent} onChange={handleNewContent} />
			<button onClick={addNewContent}>ADD</button>
		</section>
	);
}
