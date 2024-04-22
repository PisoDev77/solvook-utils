/**
 * ## 어휘 일괄등록용 헤더 모음
 * @returns ReactElement
 */
export const getHeaders = (word) => {
	const headers = {
		//prettier-ignore
		"어휘": [ '브랜드',	'구분1',	'구분2',	'구분3',	'KEY',	'타이틀',	'학교급',	'교과목',	'교과',	'교육과정1',	'교육과정2',	'교육과정3',	'교육과정4',	'작성자',	'등록일',	'수정일',	'사용설정',	'공개여부',	'POS(품사)',	'Entry(어휘)',	'다국어',	'',	'',	'',	'',	'',	'',	'',	'',	'DEF',	'발음기호',	'이미지_경로',	'오디오_경로',	'비디오_경로',	'예문 문장KEY',	'문항KEY_어휘',	'난이도',	'지식맵1',	'지식맵2',	'지식맵3',	'지식맵4',	'지식맵5',	'지식맵6',	'지식맵7',	'지식맵8',	'지식맵9',	'지식맵10' ],
		//prettier-ignore
		"문장": ['브랜드',	'구분1',	'구분2',	'구분3',	'KEY',	'타이틀',	'학교급',	'교과목',	'교과',	'교육과정1',	'교육과정2',	'교육과정3',	'교육과정4',	'작성자',	'등록일',	'수정일',	'사용설정',	'공개여부',	'Speaker',	'Entry(문장)',	'다국어',	'',	'',	'',	'',	'',	'',	'',	'',	'구문분석',	'분절 DB',	'분절 DB 해석',	'chunk1 (Unscramble)',	'chunk2 (blank)',	'Key Grammar',	'',	'Key Expression',	'',	'연관 지문정보(Key)',	'이미지_경로',	'오디오_경로',	'비디오_경로',	'원천DB(어휘) Key',	'문항KEY_문장',	'난이도',	'지식맵1',	'지식맵2',	'지식맵3',	'지식맵4',	'지식맵5',	'지식맵6',	'지식맵7',	'지식맵8',	'지식맵9',	'지식맵10',],
		//prettier-ignore
		"지문": ['브랜드',	'구분1',	'구분2',	'구분3',	'KEY',	'타이틀',	'학교급',	'교과목',	'교과',	'교육과정1',	'교육과정2',	'교육과정3',	'교육과정4',	'작성자',	'등록일',	'수정일',	'사용설정(1/0)',	'공개여부(1/0)',	'문단Key',	'문단 Summary(영어)',	'문장관리로 복사여부(Y/N)',	'문장Key',	'양식 (대화형/ 일반형)',	'Speaker',	'Entry(문장)',	'다국어',	'',	'',	'',	'',	'',	'',	'',	'',	'구문분석',	'분절 DB',	'분절 DB 해석',	'chunk1 (Unscramble)',	'chunk2 (blank)',	'Key Grammar',	'',	'Key Expression',	'',	'이미지_경로',	'오디오_경로',	'오디오_시작점(MM:SS)',	'오디오_끝점(MM:SS)',	'비디오_경로',	'비디오_시작점(MM:SS)',	'비디오_끝점(MM:SS)',	'문항Key_문장',	'문항Key_문단',	'문항KEY_지문',	'난이도',	'지식맵1',	'지식맵2',	'지식맵3',	'지식맵4',	'지식맵5',	'지식맵6',	'지식맵7',	'지식맵8',	'지식맵9',	'지식맵10',],
	};

	const langsInfo = {
		어휘: 20,
		문장: 20,
		지문: 25,
	};

	const langs = {
		no: langsInfo[word],
		datas: ['영어', '한국어', '일본어', '중국어간체', '중국어번체', '베트남어', '스페인어', '포르투갈어', '아랍어'],
	};

	const selectedHeader = headers[word];

	return (
		<thead>
			<tr>
				<td colSpan={selectedHeader.length}>텍스트 {word}</td>
			</tr>
			<tr>
				{selectedHeader.map((header) => (
					<td>{header}</td>
				))}
			</tr>
			<tr>
				{selectedHeader.map((_, idx) => {
					return (
						<td>
							{idx >= langs.no && idx < langs.no + langs.datas.length ? langs.datas[idx - langs.no] : ''}
						</td>
					);
				})}
			</tr>
			<tr>
				{selectedHeader.map((_, idx) => (
					<td>{idx}</td>
				))}
			</tr>
		</thead>
	);
};
