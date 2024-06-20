import { InputCalendar, formatDate } from '../Inputs';

export default function List({ updateSlayer, deleteSlayer, slayers }) {
	const handleUpdateSlayer = (e, cid) => {
		updateSlayer({ cid, slayer: e.target.value }, slayers);
	};

	const handleUpdateAnswer = (e, cid) => {
		updateSlayer({ cid, answer: e.target.value }, slayers);
	};

	const renderList = () => {
		return slayers.map((_slayer) => {
			const { slayer, cid, reg_date, update_date, answer } = _slayer;

			return (
				<section className='qslayer-slayer'>
					<section className='slayer'>
						<Slayer slayer={slayer} onChange={(e) => handleUpdateSlayer(e, cid)} />
						<Delete onClick={() => deleteSlayer(cid)} />
						<div>
							📅
							<InputCalendar attrProps={{ value: reg_date, name: 'reg_date', disabled: true }} />
							🛠️
							<InputCalendar attrProps={{ value: update_date, name: 'update_date', disabled: true }} />
						</div>
					</section>
					<Answer answer={answer} onChange={(e) => handleUpdateAnswer(e, cid)} />
				</section>
			);
		});
	};

	return <section className='qslayer-contents'>{renderList()}</section>;
}

function Slayer({ slayer, onChange }) {
	return <input type='text' value={slayer} onChange={onChange} />;
}

function Delete({ onClick }) {
	return (
		<button className='delete-slayer' onClick={onClick}>
			🗑️
		</button>
	);
}

function Answer({ answer, onChange }) {
	return (
		<textarea
			placer="Let's Slays Question"
			rows={10}
			name='answer'
			className='answer'
			value={answer}
			onChange={onChange}
		></textarea>
	);
}
