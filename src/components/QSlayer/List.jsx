import { InputCalendar } from '../Inputs';

export default function Add({ list, setList }) {
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

	const renderList = () => {
		return list.map(({ reg_date, update_date, content, answer }, idx) => {
			return (
				<section className='qslayer-content'>
					<section className='content'>
						<h2>
							{idx + 1}.
							<input type='text' value={content} onChange={(e) => handleUpdateContent(e, idx)} />
						</h2>
						<InputCalendar attrProps={{ value: reg_date, name: 'reg_date', disabled: true }} />
						<InputCalendar attrProps={{ value: update_date, name: 'update_date', disabled: true }} />
					</section>
					<textarea
						rows={10}
						name='answer'
						className='answer'
						value={answer}
						list={list}
						onChange={(e) => handleUpdateAnswer(e, idx)}
					></textarea>
				</section>
			);
		});
	};

	return <section className='qslayer-contents'>{renderList()}</section>;
}

function Content(title) {
	return (
		<section className='content'>
			<h2>
				{idx + 1}.
				<input type='text' value={content} onChange={(e) => handleUpdateContent(e, idx)} />
			</h2>
			<InputCalendar attrProps={{ value: reg_date, name: 'reg_date', disabled: true }} />
			<InputCalendar attrProps={{ value: update_date, name: 'update_date', disabled: true }} />
		</section>
	);
}
