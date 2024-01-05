import { useState } from 'react';

export default function 지문추출() {
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
		const arr = ['strategy 01', 'Challenge 2'];
		const arr2 = ['C 01번-02번', '07번-11번', '13번-17번', '18번-22번', '17번-20번'];
		const res = tmp.map((i, idx) => {
			const am = i.map((j, idx2) => (
				<tr>
					{/* <td>{'Progress Test'}</td> */}
					{/* <td>{'Progress Test ' + (idx + 0) + ''}</td> */}
					<td>{'' + (idx + 3 + '').padStart(2, '0') + '과'}</td>
					{/* <td>{'유형 ' + (idx + 1 + '').padStart(2, '0') + ''}</td> */}
					{/* <td>{'모의고사 ' + (idx + 1 + '').padStart(2, '0') + '회'}</td> */}
					{/* <td>{'Read & Apply ' + (idx2 + 1 + '').padStart(2, '0') + ''}</td> */}
					{/* <td>{idx2 === 0 ? '유형 예제 1' : 'Apply and Practice ' + idx2 + '번'}</td> */}
					<td>{idx2 + 1 + '번'}</td>
					{/* <td>{arr2[idx2]}</td> */}
					{/* <td>{`Reading ${(idx2 + 1 + '').padStart(2, '0')}`}</td> */}
					{/* <td style={{}}>{j[0]}</td> */}
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
