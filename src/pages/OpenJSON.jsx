import React, { useState } from 'react';

export default function OpenJSON() {
	const [fileContent, setFileContent] = useState(null);

	// 파일 업로드 핸들러
	const handleFileUpload = (event) => {
		const file = event.target.files[0];
		const reader = new FileReader();

		reader.onload = (e) => {
			const content = e.target.result;
			setFileContent(content);
		};

		reader.readAsText(file);
	};

	// JSON 데이터 파싱 함수
	const parseJSONContent = () => {
		if (!fileContent) return null;

		try {
			return JSON.parse(fileContent);
		} catch (error) {
			console.error('Error parsing JSON:', error);
			return null;
		}
	};

	// JSON 내용 렌더링 함수
	const renderJSONContent = (data, depth = 0) => {
		if (!data) return null;

		return (
			<ul>
				{Object.entries(data).map(([key, value]) => (
					<li key={key}>
						{key}: {typeof value === 'object' ? renderJSONContent(value, depth + 1) : value}
					</li>
				))}
			</ul>
		);
	};

	const renderDepth = (data) => {
		if (!data) return null;

		const depth1 = data.curriMetaMap[0];
		const depth2 = data.curriMetaMap[1];
		const depth3 = data.curriMetaMap[2];

		console.log(depth1);
		console.log(depth2);
		console.log(depth3);
	};

	return (
		<article>
			<input type='file' onChange={handleFileUpload} />
			<div>{renderDepth(parseJSONContent())}</div>
			<div>
				<h2>Content from Uploaded JSON:</h2>
				{renderJSONContent(parseJSONContent())}
			</div>
		</article>
	);
}
