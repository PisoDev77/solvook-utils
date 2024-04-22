import { useRef, useState } from 'react';
import { utils, writeFileXLSX } from 'xlsx';

import './Excel.css';
import { getHeaders } from '../constant/TableHeaders';

export default function Excel() {
	const excelRef = useRef(null);

	const [selectedHeader, setSelectedHeader] = useState('어휘');
	const [str, setStr] = useState('');
	const [tbody, setTbodey] = useState([]);

	const handleExcel = () => {
		const wb = utils.table_to_book(excelRef.current);
		writeFileXLSX(wb, 'ffff.xlsx');
	};

	const tmpFunc = (arr) => {
		console.log(arr.join(''));
		return arr.join('') === '' ? '' : arr.map((i) => `{${i.trim()}}`).join(' ');
	};

	const handleTa = (e) => {
		const inputStr = e.target.value;

		const classNo = 'H1_U3_';

		const rows = inputStr.split('{구분}');
		rows.shift();
		const tmpRows = rows.map((row, idx) => {
			if (idx === 1) console.log(row.split('\t'));

			const rowInfo = row.split('\t');
			let title = rowInfo[2];

			if (title === '본문') title = 'Happy Birthday, My Great-Grandma';
			else if ((title === 'Read More') | (title === 'Read Culture')) title = 'Keep Trying and Keep Hoping';
			else if (title.toLowerCase() === 'script') {
				title = classNo + rowInfo[3] + '_' + rowInfo[5];
				title = rowInfo[3] === 'Task4' ? classNo + rowInfo[3] : title;
			} else title = '타이틀 오류';
			return (
				<tr>
					<td>3</td> {/* 브랜드 */}
					<td>텍스트</td> {/* 구분 1 */}
					<td>지문</td> {/* 구분 2 */}
					<td>혼합형</td> {/* 구분 3 */}
					<td></td> {/* Key */}
					<td>{title}</td> {/* 타이틀 */}
					<td>7</td> {/* 학교급 */}
					<td>355</td> {/* 교과목 */}
					<td>28510</td> {/* 교과 */}
					<td>28516</td> {/* 교육과정1 */}
					<td>28548</td> {/* 교육과정2 */}
					<td></td> {/* 교육과정3 */}
					<td></td> {/* 교육과정4 */}
					<td>freelancer02</td> {/* 작성자 */}
					<td></td> {/* 등록일 */}
					<td></td> {/* 수정일 */}
					<td>1</td> {/* 사용설정 */}
					<td>1</td> {/* 공개여부 */}
					<td>{rowInfo[6]}</td> {/* 문단키 */}
					<td>{rowInfo[33]}</td> {/* 문단 Summary */}
					<td>Y</td> {/* 문장 관리로 복사여부 */}
					<td></td> {/* 문장키 */}
					<td>{rowInfo[9].trim() === '' ? '일반형' : '대화형'}</td> {/* 양식 대화형 일반형 */}
					<td>{rowInfo[9]}</td> {/* speaker */}
					<td>{rowInfo[10].replace(/<@>|<\/@>/g, '').trim()}</td> {/* Entry */}
					<td></td> {/* 다국어_영어 */}
					<td>{rowInfo[14].replace(/<@>|<\/@>/g, '').trim()}</td> {/* 다국어_한국어 */}
					<td></td> {/* 다국어_ */}
					<td></td> {/* 다국어_ */}
					<td></td> {/* 다국어_ */}
					<td></td> {/* 다국어_ */}
					<td></td> {/* 다국어_ */}
					<td></td> {/* 다국어_ */}
					<td></td> {/* 다국어_ */}
					<td></td> {/* 구문분석_ */}
					<td>{tmpFunc(rowInfo[30].split('/'))}</td> {/* 부너절DB_ */}
					<td>{tmpFunc(rowInfo[31].split('/'))}</td> {/* 부너절DB해석 */}
					<td>{tmpFunc(rowInfo[32].split('/'))}</td> {/* chunk1 */}
					<td></td> {/* chunk2 */}
					<td>{rowInfo[35]}</td> {/* key grammar */}
					<td></td> {/*  */}
					<td>{rowInfo[36]}</td> {/* Key Expression */}
					<td></td> {/*  */}
					<td></td> {/* 이미지_경로 */}
					<td></td> {/* 오디오_경로 */}
					<td>{rowInfo[27]}</td> {/* 오디오_시작점 */}
					<td>{rowInfo[28]}</td> {/* 오디오_끝점 */}
					<td></td> {/* 비디오_경로 */}
					<td></td> {/* 비디오_시작점 */}
					<td></td> {/* 비디오_끝점 */}
					<td></td> {/* 문항key_문장 */}
					<td></td> {/* 문항key_문단 */}
					<td></td> {/* 문항key_지문 */}
					<td></td> {/* 난이도 */}
					{new Array(10).fill(0).map((_, idx) => (
						// <td>지식맵{idx + 1}</td>
						<td></td>
					))}
				</tr>
			);
		});

		setTbodey(tmpRows);
		setStr(e.target.value);
	};

	return (
		<div>
			<textarea onChange={handleTa} value={str}></textarea>
			<button onClick={handleExcel}>Excel Download</button>
			<select value={selectedHeader} onChange={(e) => setSelectedHeader(e.target.value)}>
				<option value={'어휘'}>어휘</option>
				<option value={'문장'}>문장</option>
				<option value={'지문'}>지문</option>
			</select>
			<hr />
			<table ref={excelRef}>
				{getHeaders(selectedHeader)}
				<tbody>{tbody}</tbody>
			</table>
		</div>
	);
}
