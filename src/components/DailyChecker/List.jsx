import { useState } from 'react';
import { formatDate } from '../../lib/format';

export default function List({ getList, removeItem, modifyItem }) {
	return (
		<ul>
			{getList().map((item) => (
				<Item {...item} removeItem={removeItem} modifyItem={modifyItem} key={'item-' + item.id} />
			))}
		</ul>
	);
}

function Item({ content, id, isDone, removeItem, modifyItem }) {
	const [mode, setMode] = useState(false);

	const handleRemove = (e) => {
		removeItem(+e.target.dataset.id);
	};

	const handleModify = (e) => {
		setMode(!mode);
	};

	const handleChange = (e) => {
		modifyItem({ id, content: e.target.value });
	};

	const handleCheck = (e) => {
		const { checked } = e.target;
		modifyItem({ id, isDone: checked ? formatDate(new Date()) : false });
	};

	return (
		<li className='item'>
			{mode ? (
				<input value={content} onChange={handleChange} />
			) : (
				<p className={isDone === formatDate(new Date()) ? 'done' : ''}>{content}</p>
			)}
			<input type='checkbox' onChange={handleCheck} />
			<button data-id={id} onClick={handleModify}>
				수정
			</button>
			<button data-id={id} onClick={handleRemove}>
				삭제
			</button>
		</li>
	);
}
