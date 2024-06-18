import { useState, useEffect } from 'react';
import '../styles/QSlayer.css';

import { QSlayerAdd, QSlayerList } from '../components/QSlayer';

export default function QSlayer() {
	const [list, setList] = useState(JSON.parse(localStorage.getItem('qslayerList')) ?? []);

	useEffect(() => {
		localStorage.setItem('qslayerList', JSON.stringify(list));
	}, [list]);

	return (
		<article className='qslayer'>
			<h1>Questions Slayer</h1>
			<QSlayerAdd list={list} setList={setList} />
			<QSlayerList list={list} setList={setList} />
		</article>
	);
}
