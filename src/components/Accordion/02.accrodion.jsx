import { useState } from 'react';

export default function Accrodion02({ data }) {
	const [currentId, setCurrentId] = useState(0);

	const handleClick = (e) => {
		const { id } = e.target.dataset;
		setCurrentId(+id);
	};

	return (
		<>
			<h3>2. React - css로 관리해보자</h3>
			<p>앞선 예제에서는 내용이 아예없어서 SEO나 접근성 측면에서 안 좋을 수 있다. css로 관리를 해보자</p>
			<ul className='container'>
				{data.map((d, idx) => (
					<li className={`accordion-item css ${currentId === idx ? 'open' : 'close'}`} key={'react_2_' + idx}>
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
