import { useState } from 'react';

export default function Add({ addSlayer }) {
	const [newContent, setNewContent] = useState('');

	const handleNewContent = (e) => {
		const inputContent = e.target.value;
		setNewContent(inputContent);
	};

	const handleAddForm = (e) => {
		e.preventDefault();
		const inputContent = e.currentTarget.qslayerContent.value;
		if (inputContent.trim() === '') return;
		addSlayer(inputContent);
		setNewContent('');
	};

	return (
		<form className='qslayer-add' onSubmit={handleAddForm}>
			<input
				type='text'
				name='qslayerContent'
				value={newContent}
				onChange={handleNewContent}
				placeholder='Write New Question Slayer!!'
			/>
			<button type='submit'>+</button>
		</form>
	);
}
