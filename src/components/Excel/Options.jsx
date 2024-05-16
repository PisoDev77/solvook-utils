import { useRef, useState } from 'react';
import { utils, writeFileXLSX } from 'xlsx';

export default function Options() {
	const excelRef = useRef(null);

	const [str, setStr] = useState('');
	const [tbody, setTbody] = useState([]);
	const [countWord, setCountWord] = useState([]);
	const [num, setNum] = useState(10);

	const handleExcel = () => {
		const wb = utils.table_to_book(excelRef.current);
		writeFileXLSX(wb, 'download.xlsx');
	};

	// 5개를 랜덤하게 뽑자
	function generateOptions(countWord, pos, wordList, no) {
		const options = [];
		let validatePos = pos;
		let tries = 0;

		options.push(no);

		while (options.length < 5) {
			const randIdx = Math.floor(Math.random() * wordList.length);
			const hasOptionIdx = options.find((optionIdx) => optionIdx === randIdx);

			if (
				hasOptionIdx === undefined &&
				countWord[randIdx] <= 3 &&
				validatePos === wordList[randIdx].split('\t')[1]
			) {
				options.push(randIdx);
				countWord[randIdx] += 1;
			}
			tries++;

			if (tries > 500) {
				switch (validatePos) {
					case '명사':
						validatePos = '대명사';
						break;
					case '대명사':
						validatePos = '명사';
						break;
					case '동사':
						validatePos = '형용사';
						break;
					case '형용사':
						validatePos = '부사';
						break;
					case '전치사':
						validatePos = '부사';
						break;
					case '구':
						validatePos = '동사';
						break;
					case '감탄사':
						validatePos = '접속사';
						break;
					case '한정사':
						validatePos = '형용사';
						break;
				}
			}

			if (tries === 1200) {
				for (let i = options.length; i < 5; i++) {
					options.push(-1);
				}
			}
		}
		for (let i = options.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[options[i], options[j]] = [options[j], options[i]];
		}

		options.push(options.findIndex((option) => option === no) + 1);
		return options;
	}

	const handleTa = (e) => {
		const val = e.target.value;
		const wordList = val.split('\n');
		setStr(val);
		const _countWord = new Array(wordList.length).fill(0);
		const _wordList = wordList.filter((i, idx) => idx < num);
		setTbody(
			_wordList
				.map((i) => i.split('\t'))
				.map(([word, pos], idx) => (
					<tr>
						<td>{idx + 1}</td>
						<td>{word}</td>
						<td>{pos}</td>
						{generateOptions(_countWord, pos, wordList, idx).map((i, _idx) => (
							<td>{i === -1 ? '선지없음' : _idx < 5 ? wordList[i].split('\t')[0] : _idx}</td>
						))}
					</tr>
				))
		);
		setCountWord(_countWord);
	};

	const handleNum = (e) => {
		const wordList = str.split('\n');
		setNum(e.target.value <= wordList.length && e.target.value > 0 ? e.target.value : num);
		const _countWord = new Array(wordList.length).fill(0);
		const _wordList = wordList.filter((i, idx) => idx < e.target.value);
		setTbody(
			_wordList
				.map((i) => i.split('\t'))
				.map(([word, pos], idx) => (
					<tr>
						<td>{idx + 1}</td>
						<td>{word}</td>
						<td>{pos}</td>
						{generateOptions(_countWord, pos, wordList, idx).map((i, _idx) => (
							<td>{i === -1 ? '선지없음' : _idx < 5 ? wordList[i].split('\t')[0] : i}</td>
						))}
					</tr>
				))
		);
		setCountWord(_countWord);
	};
	return (
		<section className='excel-options'>
			<textarea name='' id='' onChange={handleTa} value={str}></textarea>
			<input type='number' onChange={handleNum} value={num} />
			<button onClick={handleExcel}>Excel Download</button>
			<table ref={excelRef}>
				<thead>
					<tr>
						<th>No</th>
						<th>단어</th>
						<th>품사</th>
						<th>선지 1</th>
						<th>선지 2</th>
						<th>선지 3</th>
						<th>선지 4</th>
						<th>선지 5</th>
						<th>답</th>
					</tr>
				</thead>
				<tbody>{tbody}</tbody>
			</table>
		</section>
	);
}
