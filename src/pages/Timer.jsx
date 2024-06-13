import { useEffect, useState } from 'react';

import '../styles/Timer.css';

import usePushNotification from '../components/Notifications/Push';
import TimerCircle from '../components/SVG/TimerCircle';
import useTimerInput from '../components/Timer/useTimerInput';
import TimerButtons from '../components/Timer/Buttons';
import TimerInput from '../components/Timer/TimerInput';
import TimerIcon from '../assets/timer.svg';

const Timer = () => {
	const [time, setTime] = useState(-1);

	const [isRunning, setIsRunning] = useState(false);
	const timerInputs = useTimerInput({ setTime });
	const { maxTime } = timerInputs;

	const [noti] = usePushNotification();

	useEffect(() => {
		let interval;
		if (isRunning) {
			interval = setInterval(() => {
				setTime((prevTime) => {
					if (prevTime <= 1) {
						clearInterval(interval);
						setIsRunning(false);
					}
					return prevTime > 0 ? prevTime - 1 : 0;
				});
			}, 1000);
		} else {
			if (time === 0) {
				noti('이벤트 완료', {
					body: '이벤트가 성공적으로 완료되었습니다.',
					icon: TimerIcon, // 알림 아이콘 (선택 사항)
				});
			}
			clearInterval(interval);
		}

		return () => clearInterval(interval);
	}, [isRunning]);

	const formatTime = (time) => {
		const minutes = String(Math.floor(time / 60)).padStart(2, '0');
		const seconds = String(time % 60).padStart(2, '0');
		return `${minutes}:${seconds}`;
	};

	const circleMeta = {
		cxy: 50,
		strokeDasharray: 2 * Math.PI * 35,
		strokeDashoffset: 2 * Math.PI * 35 * (1 - (time < 0 ? 0 : time) / maxTime),
		strokeWidth: 25,
		str: formatTime(time < 0 ? 0 : time),
	};

	const buttonsMeta = {
		setIsRunning,
		isRunning,
		setTime,
	};

	return (
		<article className='timer'>
			<TimerInput {...timerInputs} />
			<TimerCircle {...circleMeta} />
			<TimerButtons {...buttonsMeta} />
		</article>
	);
};

export default Timer;
