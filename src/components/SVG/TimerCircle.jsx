import { useEffect, useState } from 'react';

export default function TimerCircle({
	setMin,
	setSec,
	maxTime,
	time,
	setTime,
	cxy = 0,
	strokeDasharray = 0,
	strokeDashoffset = 0,
	strokeWidth = 10,
	str = '',
}) {
	const [tmp, setTmp] = useState(strokeDashoffset);

	useEffect(() => {
		setTmp(strokeDashoffset);
	}, [time]);

	const handleClick = (e) => {
		const section = e.currentTarget;
		const rect = section.getBoundingClientRect();
		const offsetX = e.clientX - rect.left;
		const offsetY = e.clientY - rect.top;

		// 중심 좌표로부터의 상대 좌표 계산
		const relativeX = offsetX - rect.width / 2;
		const relativeY = offsetY - rect.height / 2;

		// 각도 계산 (라디안 단위)
		const angle = Math.atan2(relativeY, relativeX);
		// 각도를 0~360 범위로 변환
		const angleInDegrees = (angle * (180 / Math.PI) + 360 + 90) % 360;

		// 각도를 초로 변환 (0~60 초 범위)
		const seconds = Math.round((angleInDegrees / 360) * maxTime);

		if (maxTime === 60) {
			setSec(seconds);
		} else {
			setMin(Math.floor(seconds / 60));
			setSec(seconds % 60);
		}
		setTime(seconds);
	};
	const handleDrag = (e) => {};

	return (
		<section className='timer-circle' onClick={handleClick} onDrag={handleDrag}>
			<svg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'>
				<circle cx={cxy} cy={cxy} r={cxy / 2 + 10} />
				<text x='30' y='55' className='timer-text'>
					{str}
				</text>
				<circle
					className={'progress'}
					style={{
						strokeDasharray,
						strokeDashoffset: tmp,
					}}
					cx={cxy}
					cy={cxy}
					r={cxy / 2 + 10}
					strokeWidth={strokeWidth}
				/>
			</svg>
		</section>
	);
}
