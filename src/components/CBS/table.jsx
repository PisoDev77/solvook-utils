import { useState } from 'react';
import { toast } from 'react-toastify';
import '../../pages/CBS.css';

import Copy from '../../lib/Copys';

export default function TableCBS() {
	const [fontSize, setFontSize] = useState(16);
	const [ta, setTa] = useState('');
	const [cols, setCols] = useState([]);
	const [table, setTable] = useState(null);

	const renderTable = ({ tableDatas, fontSize = 16, colWids }) => {
		const tmp = colWids ?? new Array(tableDatas[0].length).fill(+`${100 / tableDatas[0].length}`);
		setCols(tmp);

		setTable(
			<div
				data-editable='false'
				class='kve-block caption-none center full-width kve-table-container on-edit kve-block-active'
				style={{
					textAlign: 'center',
					transformOrigin: '0px 0px',
					verticalAlign: 'middle',
					maxWidth: '100%',
					fontSize: fontSize / 16 + 'rem',
				}}
			>
				<figure>
					<figcaption
						data-editable='true'
						aria-placeholder='제목입력'
						data-placeholder='제목입력'
						style={{ textAlign: 'center' }}
					></figcaption>
					<table
						data-editable='true'
						role='none'
						style={{ 'border-spacing': '0px', 'max-width': '100%', 'touch-action': 'none' }}
					>
						<colgroup>
							{tmp.map((colWid) => {
								return <col style={{ width: colWid + '%' }} />;
							})}
						</colgroup>
						<tbody>
							{tableDatas.map((tableData) => (
								<tr style={{ height: `${100 / tableDatas.length}%` }}>
									{tableData.map((col) => (
										<td>{col.trim() === '' ? <br /> : col}</td>
									))}
								</tr>
							))}
						</tbody>
					</table>
				</figure>
			</div>
		);
	};

	const handleFontSize = (e) => {
		const fontSize = +e.target.value;
		if (fontSize < 5) return;
		setFontSize(fontSize);
		renderTable({ tableDatas: ta.split('\n').map((cols) => cols.split('\t')), fontSize, colWids: cols });
	};

	const handleCopy = (e) => {
		new Copy('', e.currentTarget.className).copyInnerHTML();
		toast.success("'복사를 완료했어요. CBS로 가서 확인해보세요.'", {
			position: 'bottom-center',
		});
	};

	const handleTa = (e) => {
		const str = e.target.value;
		setTa(str);

		const tableDatas = str.split('\n').map((cols) => cols.split('\t'));
		renderTable({ tableDatas, fontSize });
	};

	const handleNum = (e, idx) => {
		const newCols = [...cols];
		newCols[idx] = +e.target.value;
		setCols(newCols);
		renderTable({ tableDatas: ta.split('\n').map((cols) => cols.split('\t')), fontSize, colWids: newCols });
	};

	return (
		<article className='CBS-table'>
			<section className='CBS-table-meta'>
				<div style={{ display: 'flex', flexDirection: 'column' }}>
					<label htmlFor='fontSize'>폰트크기</label>
					<input type='number' name='fontSize' value={fontSize} onChange={handleFontSize} />
				</div>
				<textarea name='' id='' onChange={handleTa} value={ta}></textarea>
			</section>
			<section className='CBS-table-meta'>
				<button onClick={handleCopy}>복사하기</button>
			</section>
			<figure>
				<table>
					<tr>
						{cols.map((col, idx) => (
							<td style={{ alignSelf: 'center', textAlign: 'center', verticalAlign: 'middle' }}>
								<input
									type='number'
									style={{ width: '60%' }}
									onChange={(e) => handleNum(e, idx)}
									value={col}
								/>
							</td>
						))}
					</tr>
				</table>
			</figure>

			<section className='copy-table'>{table ?? '메타 정보들을 변경하세요'}</section>
		</article>
	);
}
