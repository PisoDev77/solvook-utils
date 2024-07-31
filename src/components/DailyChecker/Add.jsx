export default function Add({ addItem }) {
	const handleSubmit = (e) => {
		e.preventDefault();

		const { item } = e.currentTarget;

		if (item.value === '') return;

		addItem({ id: 0, content: item.value });

		item.value = '';
	};

	return (
		<form className='daliychecker-add' onSubmit={handleSubmit}>
			<input type='text' name='item' id='item' placeholder='Type addtional Daily Checker' />
			<button type='submit'>ADD</button>
		</form>
	);
}
