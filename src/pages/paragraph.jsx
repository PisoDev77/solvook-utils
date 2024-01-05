import { useState } from 'react';

export default function Paragraph() {
	const [data, setData] = useState({
		str: '',
		res: [],
	});

	/**
	 * 주어진 할당된 paragraph 문자열을 문장 단위로 나누어 React Element 배열을 반환하는 함수.
	 * @param {string} paragraph - paragraph 문자열
	 * @returns {Array<JSX.Element>} - React Element 배열
	 */
	const parseParagraph = (paragraph) => {
		const [textbookId, unitId, storyId, paragraphId, paragraphText, pageInfo, meta_data, filename] =
			paragraph.split(/\t/g);

		// 문장 분리 정규식 패턴0
		const sentencePattern = /(\.|\!|\?)/g;

		// 문장을 분리하여 배열에 저장
		const sentences = paragraphText
			.replace(/Mr\.|Dr\./g, (match) => match.replace('.', ',,'))
			.replace(/U\.S\./g, (match) => match.replace('.', ',,'))
			.split(sentencePattern)
			.map((sentence) => sentence.replace(/\n/g, '').trim());

		const sentenceElements = [];
		let formerSentence = '';

		let previousForm = [0, 0, 0];
		let sentenceId = 0;

		sentences.forEach((sentence) => {
			const isFullStop = sentencePattern.test(sentence.trim());
			formerSentence = isFullStop ? formerSentence + sentence : sentence;

			if (isFullStop) {
				if (+textbookId !== +previousForm[0]) sentenceId = 1;
				else if (+unitId !== +previousForm[1]) sentenceId = 1;
				else if (+paragraphId !== +previousForm[2]) sentenceId = 1;
				else sentenceId++;

				sentenceElements.push(
					<tr key={sentenceElements.length}>
						<td>{textbookId}</td>
						<td>{unitId}</td>
						<td>{storyId}</td>
						<td>{paragraphId}</td>
						<td>{sentenceId}</td>
						<td>{formerSentence.replace(',,', '.')}</td>
						<td>{pageInfo}</td>
						<td>{meta_data}</td>
						<td>{filename}</td>
					</tr>
				);
			}

			previousForm = [textbookId, unitId, paragraphId];
		});

		return sentenceElements;
	};

	const handleForm = (e) => {
		const { value } = e.target;

		const paragraphs = value.split('{구분}').filter((i) => i.trim() !== '');

		// 문장 분리 정규식 패턴0
		const sentencePattern = /(\.|\!|\?)/g;

		// const res = paragraphs.map((paragraph) =>
		// 	paragraph.split(sentencePattern).map((sentence) => <div>{sentence}</div>)
		// );

		const res = paragraphs
			.map((paragraph) => paragraph.replace(sentencePattern, (match) => match + '{Enter}'))
			.map((paragraph) => paragraph.split('{Enter}').map((sentence) => <div>{sentence}</div>));

		setData({
			str: value,
			res,
		});
	};

	return (
		<>
			<div>
				&nbsp;&nbsp;&nbsp;<kbd>shift</kbd>+<kbd>ctrl</kbd>+<kbd>v</kbd>&nbsp;
				<br />
				&nbsp; 서식없이 붙여넣기로 엑셀에 넣으면 줄바꿈대로 셀에 기입됩니다.
			</div>
			<form onChange={handleForm}>
				<hr />
				<textarea value={data.str} name={'str'} style={{ resize: 'both', height: '20vh' }}></textarea>
				<br />
				<div style={{ display: 'flex' }}>
					<div style={{ width: '80%' }}>{data.res}</div>
				</div>
			</form>
		</>
	);
}
