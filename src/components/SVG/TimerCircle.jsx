import { useEffect, useState, useRef } from 'react';
import throttle from 'lodash/throttle';

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
	const ref = useRef(null);
	const [tmp, setTmp] = useState(strokeDashoffset);
	const [isMouseDown, setIsMouseDown] = useState(false); // 클릭 상태를 나타내는 상태 변수 추가

	useEffect(() => {
		setTmp(strokeDashoffset);
	}, [time, strokeDashoffset]);

	const getPos = (e) => {
		const section = ref.current;
		const rect = section.getBoundingClientRect();
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
		const seconds = Math.round((angleInDegrees / 360) * maxTime);

		if (maxTime === 60) {
			setSec(seconds);
		} else {
			setMin(Math.floor(seconds / 60));
			setSec(seconds % 60);
		}
		setTime(seconds);
	};

	const throttledGetPos = throttle(getPos, 200); // 200ms 간격으로 호출

	const handleClick = (e) => {
		getPos(e);
	};

	const handleMouseDown = (e) => {
		setIsMouseDown(true); // 마우스 클릭 상태로 설정
	};

	const handleMouseMove = (e) => {
		e.preventDefault();
		if (isMouseDown) {
			throttledGetPos(e); // 마우스 클릭 상태일 때만 이벤트 처리
		}
	};

	const handleMouseUp = () => {
		setIsMouseDown(false); // 마우스 클릭 해제 상태로 설정
	};

	const handleTouchMove = (e) => {
		e.preventDefault();
		throttledGetPos(e.touches[0]); // 터치 이벤트 처리
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
