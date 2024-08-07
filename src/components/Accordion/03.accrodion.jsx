import { useState } from 'react';

export default function Accrodion03({ data }) {
	const [currentId, setCurrentId] = useState(0);

	const handleClick = (e) => {
		const { id } = e.target.dataset;
		setCurrentId(+id);
	};

	return (
		<>
			<h3>1.3. React - css animaiton transition</h3>
			<p>Animaition - transition 써보기</p>
			<ul className='container'>
				{data.map((d, idx) => (
					<li
						className={`accordion-item css anime1 ${currentId === idx ? 'open' : 'close'}`}
						key={'react_3_' + idx}
					>
						<h4 onClick={handleClick} data-id={idx}>
							{d.title}
						</h4>
						<p>{d.content}</p>
					</li>
				))}
			</ul>
		</>
	);
}
