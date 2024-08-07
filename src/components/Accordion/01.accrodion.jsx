import { useState } from 'react';

export default function Accrodion01({ data }) {
	const [currentId, setCurrentId] = useState(0);

	const toggleItem = (idx) => {
		setCurrentId(+idx);
	};

	return (
		<>
			<h3>1.1. React - 현재 상태만 그리기</h3>
			<p>React에서 상태로 관리 현재 클릭된 Accordion 아이템이 무엇인지</p>
			<ul className='container'>
				{data.map((d, idx) => (
					<li className={`accordion-item ${currentId === idx ? 'open' : ''}`} key={'react_1_' + idx}>
						<h4 onClick={() => toggleItem(idx)}>{d.title}</h4>
						{currentId === +idx ? <p>{d.content}</p> : ''}
					</li>
				))}
			</ul>
		</>
	);
}
