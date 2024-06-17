import { useState, useEffect, useRef } from 'react';
import '../styles/QSlayer.css';

export default function QSlayer() {
	const newContentInput = useRef(null);

	const [list, setList] = useState(JSON.parse(localStorage.getItem('qslayerList')) ?? []);
	const [newContent, setNewContent] = useState('');

	useEffect(() => {
		const saveList = () => {
			localStorage.setItem('qslayerList', JSON.stringify(list));
		};

		saveList();
	}, [list]);

	const handleNewContent = (e) => {
		const inputContent = e.target.value;
		setNewContent(inputContent);
	};

	const handleUpdateContent = (e, idx) => {
		const newList = [...list];
		newList[idx].content = e.target.value;
		setList(newList);
	};

	const handleUpdateAnswer = (e, idx) => {
		const newList = [...list];
		newList[idx].answer = e.target.value
			.split('\n')
			.map((i) => `${i}`)
			.join('\n');

		setList(newList);
	};

	const addNewContent = () => {
		const inputContent = newContentInput.current.value;
		setList([{ content: inputContent, reg_date: '2024-06-17', update_date: '2024-06-17', answer: '' }, ...list]);
	};

	const renderList = () => {
		return list.map(({ reg_date, update_date, content, answer }, idx) => (
			<section className='qslayer-content'>
				<section className='content'>
					<h2>
						{idx + 1}.<input type='text' value={content} onChange={(e) => handleUpdateContent(e, idx)} />
					</h2>
					<label htmlFor='reg_date'>등록일</label>
					<input type='text' disabled value={reg_date} name='reg_date' />
					<label htmlFor='update_date'>수정일</label>
					<input type='text' disabled value={update_date} name='update_date' />
				</section>
				<textarea
					rows={10}
					name='answer'
					className='answer'
					value={answer}
					onChange={(e) => handleUpdateAnswer(e, idx)}
				></textarea>
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
