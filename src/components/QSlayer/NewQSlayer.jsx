import { formatDate } from '../../lib/format';

export default function NewQSlayer({ getNewQid, addQ }) {
	const handleSubmit = (e) => {
		e.preventDefault();

		const form = e.currentTarget;
		const content = form.content.value;

		if (content.trim() === '') return;

		addQ({ qId: getNewQid(), content, reg_date: formatDate(new Date()), isSlayerd: false, steps: [] });

		form.content.value = '';
	};

	return (
		<form className='qslayer-add' onSubmit={handleSubmit}>
			<label htmlFor='content'>New QSlayer</label>
			<input type='text' name='content' id='content' />
			<button type='submit'>+</button>
		</form>
	);
}
