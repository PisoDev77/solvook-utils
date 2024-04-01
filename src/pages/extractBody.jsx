import { useState } from 'react';

import './ExtractBody.css';

export default function ExtractBody() {
	const [bodys, setBodys] = useState();
	const [extractedBodys, setExtractedBodys] = useState();

	const organizeFootNotes = (str) => {
		const res = (str ?? '')
			.split(/\✽|\*/)
			.filter((i) => i.trim() !== '')
			.map((i) =>
				i
					.replace(/\:/g, '')
					.replace(/([A-Za-z])\s+([가-힣\(\[])/g, (_, eng, kor) => `${eng} : ${kor}`)
					.trim()
			);
		return res.map((i) => [i, <br />]);
	};

	const handleChange = (e) => {
		const { value } = e.target;
		setBodys(value);

		const bodyContents = value
			.split('{과}')
			.filter((i) => i.trim() !== '')
			.map((i) => i.split('{페이지}').map((j) => j.split('//')));

		setExtractedBodys(
			bodyContents.map((bodyContent, bodyContentIdx) =>
				bodyContent.map(([body, footNotes], bodyIdx) => {
					const arr = ['Step 1-1', 'Step 1-2', 'Step 2-1', 'Step 2-2', 'Step 3-1', 'Step 3-2', 'Step 3-3'];

					return (
						<tr>
							{/* unit_title  */}
							<td>{`${(bodyContentIdx + 1 + '').padStart(2, 0)}강`}</td>
							{/* <td>{`Review Test `}</td> */}

							{/* paragraph_title */}
							{/* <td>{`${(bodyIdx + 1 + '').padStart(1, 0)}번`}</td> */}
							<td>{`${arr[bodyIdx].padStart(1, 0)}번`}</td>
							{/* <td>{`${(arr[bodyIdx] ?? bodyIdx - arr.length + 1 + '').padStart(1, 0)}번`}</td> */}

							{/* 본문 */}
							<td>{body.replace(/\n/, ' ')}</td>

							{/* 각주 */}
							<td>{organizeFootNotes(footNotes)}</td>
						</tr>
					);
				})
			)
		);
	};

	return (
		<article>
			<section className={'extract-body'}>
				<textarea value={bodys} onChange={handleChange}></textarea>
				<table>
					<thead>
						<tr>
							<th>unit_title</th>
							<th>paragraph_title</th>
							<th>본문</th>
							<th>각주</th>
						</tr>
					</thead>
					<tbody>{extractedBodys}</tbody>
				</table>
			</section>
		</article>
	);
}
