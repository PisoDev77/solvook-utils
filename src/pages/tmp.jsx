import { useState } from 'react';

import './ExtractBody.css';

export default function ExtractBody() {
	const [ta1, setTa1] = useState();
	const [res1, setRes1] = useState([]);

	const metadata1 = (str) => {
		const res = str
			.split(/\✽|\*/)
			.filter((i) => i.trim() !== '')
			.map((i) =>
				i
					.replace(/\:/g, '')
					// .replace(/\:/g, ' : ')
					.replace(/([A-Za-z])\s+([가-힣\(\[])/g, (_, eng, kor) => `${eng} : ${kor}`)
					.trim()
			);
		// return res.map((i) => [i, <br />]);
		// return res.join('{조인}');
		return <pre>{res.join(`\n`)}</pre>;
	};

	const handleChange = (e) => {
		const { value } = e.target;
		setTa1(value);

		const tmp = value
			.split('{과}')
			.filter((i) => i.trim() !== '')
			.map((i) => i.split('{페이지}').map((j) => j.split('//')));
		const arr = ['기출 01', '적용 01'];
		const type = ['OVERALL 05번', 'Review Test Reading 1번', 'Review Test Reading 2번'];
		let bool = false;
		let cnt = 163;
		const res = tmp.map((i, idx) => {
			bool = !bool;
			const len = i.length;
			const am = i.map((j, idx2) => (
				<tr>
					{/* <td>Chapter 2</td> */}
					{/* <td>{'' + (idx + 9 + '').padStart(2, '0') + '강'}</td> */}
					<td>{'Dictation ' + (idx + 16 + '').padStart(1, '0') + '회'}</td>
					{/* <td>{'' + (idx + 9 + '').padStart(2, '0') + '회'}</td> */}
					{/* <td>{'Unit ' + (parseInt(idx / type.length) + 1 + '').padStart(2, '0') + ''}</td> */}
					{/* <td>{'' + (parseInt(idx / 2) + 8 + '').padStart(2, '0') + '강'}</td> */}
					{/* <td>{idx2 === 0 ? 'Practice A' : 'Actual ' + (idx2 - 1 + '').padStart(1, '0') + '번'}</td> */}
					{/* <td>
						{idx2 < arr.length
							? arr[idx2]
							: 'Read & Apply ' + (idx2 - arr.length + 1 + '').padStart(2, '0') + ''}
					</td> */}
					{/* <td>{'' + (cnt++ + '').padStart(2, '0') + '번'}</td> */}
					<td>{'' + (idx2 + 1 + '').padStart(2, '0') + '번'}</td>
					{/* <td>{type[idx2]}</td> */}
					{/* <td>{'Read & Apply ' + (idx2 + 1 + '').padStart(1, '0') + '번'}</td> */}
					{/* <td>{`${idx2 === 0 ? '기출 01' : 'Read & Apply ' + idx2 + '번'}`}</td> */}
					<td style={{}}>{j[0].replace(/\n/, ' ')}</td>
					<td style={{}}>{j[1] ? metadata1(j[1]) : ''}</td>
				</tr>
			));

			return am;
		});

		setRes1(res);
	};

	return (
		<main>
			<div style={{ display: 'flex', flexDirection: 'row', alignItems: 'start' }}>
				<textarea
					style={{ padding: '1rem', minWidth: '30%' }}
					value={ta1}
					cols='60'
					rows='50'
					onChange={handleChange}
				></textarea>
				<table border={1} style={{ padding: '1rem' }}>
					<tbody>{res1}</tbody>
				</table>
			</div>
		</main>
	);
}
