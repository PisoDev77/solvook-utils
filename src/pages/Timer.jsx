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
	const { maxTime, min, sec, setMin, setSec } = timerInputs;

	const [noti] = usePushNotification();

	const formatTime = (time, bool = false) => {
		const minutes = String(Math.floor(time / 60)).padStart(2, '0');
		const seconds = String(time % 60).padStart(2, '0');
		return bool ? `${time > 60 ? `${minutes}분 ` : ''} ${seconds}초 ` : `${minutes}:${seconds}`;
	};

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
				noti('Timer 종료', {
					body: formatTime(min * 60 + sec, true) + '가 지났습니다.',
					icon: TimerIcon, // 알림 아이콘 (선택 사항)
				});
			}
			clearInterval(interval);
		}

		return () => clearInterval(interval);
	}, [isRunning]);

	const circleMeta = {
		time,
		setMin,
		setSec,
		maxTime,
		setTime,
		cxy: 50,
		strokeDasharray: 2 * Math.PI * 35,
		strokeDashoffset: 2 * Math.PI * 35 * (1 - (time < 0 ? 0 : time) / maxTime),
		strokeWidth: 25,
		str: formatTime(time < 0 ? 0 : time),
	};

	const buttonsMeta = {
		setIsRunning,
		min,
		sec,
		isRunning,
		setTime,
	};

	return (
		<article className='timer'>
			<TimerInput {...timerInputs} />
			<TimerButtons {...buttonsMeta} />
			<TimerCircle {...circleMeta} />
		</article>
	);
};

export default Timer;
