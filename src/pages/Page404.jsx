import { useLocation } from 'react-router-dom';
import { useState } from 'react';

const arr = [
	'그 인물은 항상 불만을 표시해.',
	'이 인물 때문에 계획이 엉망이 돼 버렸어.',
	'인물이 자꾸만 제 발목을 잡아.',
	'그 인물은 내 일상을 불편하게 만들어.',
	'이 인물 때문에 스트레스 받아 죽겠어.',
	'인물이 왜 자꾸 나를 비방하는 거지?',
	'그 인물 때문에 나의 자존감이 낮아져.',
	'이 인물은 내가 싫어하는 스타일이야.',
	'인물이 자꾸 나를 무시하잖아.',
	'그 인물 때문에 나는 매일 싸우고 있어.',
	'이 인물이 너무 거만하게 행동해.',
	'인물이 자꾸 내 생각을 모르겠대.',
	'그 인물 때문에 나는 매일 피곤해.',
	'이 인물은 내가 좋아하는 것들을 부정해.',
	'인물이 자꾸 나를 비웃어.',
	'그 인물 때문에 내 자유가 제한돼.',
	'이 인물은 항상 나에게 문제를 일으켜.',
	'인물이 자꾸 나에게 나쁜 영향을 끼쳐.',
	'그 인물 때문에 내가 슬퍼.',
	'이 인물이 너무 자기중심적이야.',
	'인물이 자꾸 나를 비난해.',
	'그 인물 때문에 나는 자신감이 없어.',
	'이 인물은 내가 싫어하는 행동을 자꾸 해.',
	'인물이 자꾸 나를 방해해.',
	'그 인물 때문에 내가 감정적으로 힘들어.',
	'이 인물은 항상 나의 말을 무시해.',
	'인물이 자꾸 나를 우롱해.',
	'그 인물 때문에 나는 매일 화가 나.',
	'이 인물은 내가 싫어하는 사람이야.',
	'인물이 자꾸 나에게 거짓말을 해.',
	'그 인물 때문에 나는 슬프고 우울해.',
	'이 인물이 나를 항상 비판해.',
	'인물이 자꾸 나의 결정을 비난해.',
	'그 인물 때문에 내가 불행해.',
	'이 인물은 내가 좋아하는 것을 놀리지.',
	'인물이 자꾸 나를 속이는 거 같아.',
	'그 인물 때문에 나는 자꾸만 스트레스를 받아.',
	'이 인물이 내 성격을 이해 못해.',
	'인물이 자꾸 나의 한계를 시험해.',
	'그 인물 때문에 나는 불안해.',
	'이 인물은 나를 항상 비웃어.',
	'인물이 자꾸 나를 도발해.',
	'그 인물 때문에 내가 지쳐.',
	'이 인물이 나를 항상 무시해.',
	'인물이 자꾸 나를 무시해.',
	'그 인물 때문에 나는 자꾸만 화가 나.',
	'이 인물은 내 기분을 항상 망치지.',
	'인물이 자꾸 나를 막아.',
	'그 인물 때문에 내가 자꾸만 불편해.',
	'이 인물이 항상 나의 실수를 드러내.',
	'인물이 자꾸 나의 결정을 비난해.',
	'그 인물 때문에 나는 매일 우울해.',
	'이 인물은 나를 항상 싫어하는 것 같아.',
	'인물이 자꾸 나를 낮추려 해.',
	'그 인물 때문에 나는 자존감이 떨어져.',
	'이 인물이 내 생각을 항상 부정해.',
	'인물이 자꾸 나를 방해해.',
	'그 인물 때문에 나는 항상 불안해.',
	'이 인물은 내가 매번 실수를 저질러.',
	'인물이 자꾸 나를 우롱해.',
	'그 인물 때문에 나는 자꾸만 스트레스 받아.',
	'이 인물이 내 기분을 항상 망치는 거 같아.',
	'인물이 자꾸 나를 도발해.',
	'그 인물 때문에 내가 지쳐.',
	'이 인물이 나를 항상 무시해.',
	'인물이 자꾸 나를 무시하는 거 같아.',
	'그 인물 때문에 나는 자꾸만 화가 나.',
	'이 인물은 내 기분을 항상 망치는 거 같아.',
	'인물이 자꾸 나를 막아.',
	'그 인물 때문에 나는 자꾸만 불편해.',
	'이 인물이 항상 나의 실수를 드러내.',
	'인물이 자꾸 나의 결정을 비난해.',
	'그 인물 때문에 나는 매일 우울해.',
	'이 인물은 나를 항상 싫어하는 것 같아.',
	'인물이 자꾸 나를 낮추려 해.',
	'그 인물 때문에 나는 자존감이 떨어져.',
	'이 인물이 내 생각을 항상 부정해.',
	'인물이 자꾸 나를 방해해.',
	'그 인물 때문에 나는 항상 불안해.',
	'이 인물은 내가 매번 실수를 저질러.',
	'인물이 자꾸 나를 우롱해.',
	'그 인물 때문에 나는 자꾸만 스트레스 받아.',
	'이 인물이 내 기분을 항상 망치는 거 같아.',
	'인물이 자꾸 나를 도발해.',
	'그 인물 때문에 내가 지쳐.',
	'이 인물이 나를 항상 무시해.',
	'인물이 자꾸 나를 무시하는 거 같아.',
	'그 인물 때문에 나는 자꾸만 화가 나.',
	'이 인물은 내 기분을 항상 망치는 거 같아.',
	'인물이 자꾸 나를 막아.',
	'그 인물 때문에 나는 자꾸만 불편해.',
	'이 인물이 항상 나의 실수를 드러내.',
	'인물이 자꾸 나의 결정을 비난해.',
	'그 인물 때문에 나는 매일 우울해.',
	'이 인물은 나를 항상 싫어하는 것 같아.',
];

function DJImg() {
	return (
		<svg
			id='_레이어_1'
			data-name='레이어 1'
			xmlns='http://www.w3.org/2000/svg'
			width='140'
			height='128'
			viewBox='0 0 140 128'
			style={{
				fill: 'var(--main-color)',
				strokeWidth: '0px',
				width: '100%',
				height: '50vh',
			}}
		>
			<path
				className='cls-1'
				d='M16.82,28.99c-2.55-4.31-4.99-8.17-7.17-12.17-2.16-3.96-1.72-7.81.81-9.93,2.46-2.06,7.04-1.6,10.42,1.14,2.99,2.43,5.91,4.96,8.86,7.44,2.21-2.86,4.2-5.51,6.28-8.09.86-1.07,1.8-2.16,2.92-2.93,3.24-2.22,6.77-2.9,10.14-.44,2.94,2.16,2.49,5.36,1.58,8.31-1.38,4.48-2.88,8.94-4.62,13.3-1.24,3.11-.2,5.15,2.04,7.29,5.39,5.15,9.76,10.94,10.9,18.6.9,6.06-.3,12.04-5.36,15.16-4.95,3.05-11.07,1.84-16.4-1-2.79-1.48-5.69-4.22-8.35-4.01-2.23.18-4.18,3.81-6.24,5.92-5.06,5.18-10,6.34-15.36,3.6-5.83-2.99-8.36-8.52-6.84-15.34,1.83-8.24,5.04-15.77,11.49-21.65,1.73-1.58,3.23-3.41,4.9-5.21Z'
			/>
			<path
				className='cls-1'
				d='M92.35,25.76c-2.47-4.29-4.75-8.24-7.02-12.2-1.35-2.35-3.57-4.78-1.22-7.48,2.49-2.86,6.03-3.09,9.22-1.52,2.69,1.33,4.98,3.48,7.4,5.34,1.32,1.01,2.53,2.17,4.07,3.5,1.95-2.53,3.7-5.15,5.8-7.46,1.74-1.91,3.65-3.94,5.91-5.08,4.59-2.3,9.26.18,9.24,5.21-.01,4.27-1.37,8.55-2.3,12.79-.29,1.31-1.13,2.51-1.78,3.72-2.19,4.03-1.82,7.19,1.95,10.5,4.9,4.31,9.11,9.36,10.18,16.21.93,5.97-1.47,10.87-5.16,15.19-2.49,2.91-9.98,2.53-14.03-.48-1.66-1.23-2.98-2.89-4.56-4.24-3.08-2.63-5.14-2.26-7.47.96-1.62,2.24-3.38,4.41-5.33,6.37-4.33,4.35-9.36,5.5-13.63,3.37-5.38-2.68-8.68-8.68-7.74-14.37,1.77-10.69,6.93-19.7,14.17-27.67.74-.81,1.44-1.66,2.31-2.67Z'
			/>
			<path
				className='cls-1'
				d='M67.22,128c-6.79-.88-14.27-1.69-21.7-2.84-7-1.09-14.11-1.99-20.86-3.98-5.81-1.71-11.31-4.61-16.71-7.44-4.11-2.16-7.85-11.5-7.02-15.97.62-3.34,2.84-4.02,5.58-2.84,4.22,1.82,8.25,4.04,12.42,5.98,16.65,7.73,34.02,12.6,52.56,11.85,6.09-.25,12.21-1.41,18.17-2.76,7.19-1.63,14.22-3.98,21.35-5.89,9.48-2.54,16.83-8.39,23.98-14.64,1.11-.97,2.8-1.3,4.22-1.93.27,1.7.95,3.44.74,5.08-.79,6.16-4.72,10.51-9.37,14.18-15.51,12.27-33.44,18.46-53.07,20.24-3.2.29-6.39.6-10.31.97Z'
			/>
			<text x={15} y={50} style={{ fill: 'red', fontWeight: 900 }}>
				404
			</text>
			<text x={7} y={93} style={{ textAlign: 'center' }}>
				Page Not Found
			</text>
		</svg>
	);
}

function Hong({ hongs }) {
	function getRandomHexColor() {
		// 랜덤한 16진수 색상 코드 생성
		const letters = '0123456789ABCDEF';
		return '#' + Array.from({ length: 6 }, () => letters[Math.floor(Math.random() * 16)]).join('');
	}

	function extractRandomElements(arr, numElements) {
		if (numElements > arr.length) {
			throw new Error('Number of elements to extract cannot be greater than the length of the array.');
		}

		let result = [];
		let arrCopy = arr.slice(); // 배열의 사본을 만들어 사용

		for (let i = 0; i < numElements; i++) {
			// 배열에서 랜덤한 인덱스 선택
			let randomIndex = Math.floor(Math.random() * arrCopy.length);

			// 선택된 요소를 결과 배열에 추가하고 원래 배열에서 제거
			result.push({
				sentence: arrCopy[randomIndex],
				fontSize: parseFloat((Math.random() * 4).toFixed(1)),
				top: parseInt(Math.random() * 75),
				textIndent: parseInt(Math.random() * 7) + 'em',
				color: getRandomHexColor(),
			});

			arrCopy.splice(randomIndex, 1);
		}

		return result;
	}

	// 27개의 랜덤한 요소 추출
	const randomElements = extractRandomElements(hongs, 32);

	return randomElements.map(({ sentence, fontSize, top, textIndent, color }) => (
		<div
			style={{
				position: 'absolute',
				color,
				fontSize: fontSize + 'rem',
				top: '0',
				left: 0,
				transform: `translate(0, ${top}vh)`,
				textIndent,
				width: '100%',
				whiteSpace: 'nowrap',
				overflow: 'hidden',
				textOverflow: 'ellipsis',
			}}
		>
			<p>{sentence.replace('인물', '홍석진')}</p>
		</div>
	));
}

export default function Page404() {
	const location = useLocation();
	const isHong = decodeURIComponent(location.pathname);
	const [hongs, setHongs] = useState(arr);
	return (
		<article
			style={{
				position: 'relative',
			}}
		>
			{isHong === '/홍석진' ? (
				<Hong hongs={hongs} />
			) : (
				<>
					<h1>{location.pathname.replace('/', '')}</h1>
					<DJImg />
				</>
			)}
		</article>
	);
}
