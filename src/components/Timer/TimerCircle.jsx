import { useEffect, useState, useRef } from 'react';
import throttle from 'lodash/throttle';

export default function TimerCircle({
	maxTime,
	time,
	cxy = 0,
	strokeDasharray = 0,
	strokeDashoffset = 0,
	strokeWidth = 10,
	mmss = '',
	handleTime,
}) {
	const ref = useRef(null);

	const [_strokeDashoffset, setStrokeDashoffset] = useState(strokeDashoffset);
	const [isMouseDown, setIsMouseDown] = useState(false); // 클릭 상태를 나타내는 상태 변수 추가

	useEffect(() => {
		setStrokeDashoffset(strokeDashoffset);
	}, [time, strokeDashoffset]);

	const calTimeByDeg = (e) => {
		const rect = ref.current.getBoundingClientRect();
		const offsetX = (e.clientX ?? e.touches[0].clientX) - rect.left;
		const offsetY = (e.clientY ?? e.touches[0].clientY) - rect.top;

		// 중심 좌표로부터의 상대 좌표 계산
		const relativeX = offsetX - rect.width / 2;
		const relativeY = offsetY - rect.height / 2;

		// 각도 계산 (라디안 단위)
		const angle = Math.atan2(relativeY, relativeX);
		// 각도를 0~360 범위로 변환
		const angleInDegrees = (angle * (180 / Math.PI) + 360 + 90) % 360;
		// 각도를 초로 변환 (0~60 초 범위)
		handleTime.time = Math.round((angleInDegrees / 360) * maxTime);
	};

	const throttledCalTimeByDeg = throttle(calTimeByDeg, 200); // 200ms 간격으로 호출

	const handleClick = (e) => {
		calTimeByDeg(e);
	};

	const handleMouseDown = (e) => {
		setIsMouseDown(true); // 마우스 클릭 상태로 설정
	};

	const handleMouseMove = (e) => {
		e.preventDefault();
		if (isMouseDown) {
			throttledCalTimeByDeg(e); // 마우스 클릭 상태일 때만 이벤트 처리
		}
	};

	const handleMouseUp = () => {
		setIsMouseDown(false); // 마우스 클릭 해제 상태로 설정
	};

	const handleTouchMove = (e) => {
		e.preventDefault();
		throttledCalTimeByDeg(e.touches[0]); // 터치 이벤트 처리
	};

	return (
		<section
			ref={ref}
			className='timer-circle'
			onMouseDown={handleMouseDown}
			onMouseMove={handleMouseMove}
			onMouseUp={handleMouseUp}
			onClick={handleClick}
			onTouchMove={handleTouchMove}
		>
			<svg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'>
				<circle cx={cxy} cy={cxy} r={cxy / 2 + 10} />
				<text x='30' y='55' className='timer-text'>
					{mmss}
				</text>
				<circle
					className={'progress'}
					style={{
						strokeDasharray,
						strokeDashoffset: _strokeDashoffset,
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
