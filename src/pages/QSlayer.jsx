import { useState, useEffect, useRef } from 'react';
import '../styles/QSlayer.css';

export default function QSlayer() {
	const newContentInput = useRef(null);

	const [list, setList] = useState([]);
	const [newContent, setNewContent] = useState('');

	const saveList = () => {
		localStorage.stringifyetItem('qslayerList', JSON.stringify(list));
	};

	useEffect(() => {
		const loadList = () => JSON.parse(localStorage.getItem('qslayerList')) ?? [];

		// setList(loadList());
		setList([
			{ reg_date: '2024-06-17', update_date: '2024-06-17', content: 'Test 1' },
			{ reg_date: '2024-06-17', update_date: '2024-06-17', content: 'Test 2' },
			{ reg_date: '2024-06-17', update_date: '2024-06-17', content: 'Test 3' },
		]);

		// return () => saveList();
	}, []);

	const handleNewContent = (e) => {
		const inputContent = e.target.value;
		setNewContent(inputContent);
	};

	const addNewContent = () => {
		const inputContent = newContentInput.current.value;
		setList([{ content: inputContent, reg_date: '2024-06-17', update_date: '2024-06-17' }, ...list]);
	};

	const renderList = () => {
		return list.map(({ reg_date, update_date, content }, idx) => (
			<section className='qslayer-content'>
				<h2>{idx + 1}.</h2>
				<label htmlFor='reg_date'>등록일</label>
				<input type='text' disabled value={reg_date} name='reg_date' />
				<label htmlFor='update_date'>수정일</label>
				<input type='text' disabled value={update_date} name='update_date' />
				<p>{content}</p>
			</section>
		));
	};

	return (
		<article className='qslayer'>
			<h1>It's Her Idea.</h1>
			<section>
				<h2>INPUT</h2>
				<input ref={newContentInput} type='text' value={newContent} onChange={handleNewContent} />
				<button onClick={addNewContent}>ADD</button>
			</section>
			<section className='qslayer-contents'>{renderList()}</section>
		</article>
	);
}
