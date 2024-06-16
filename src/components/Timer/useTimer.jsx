import { useEffect, useState } from 'react';
import usePushNotification from '../Notifications/Push';

export default function useTimer() {
	const [time, setTime] = useState(-1);
	const [isRunning, setIsRunning] = useState(false);
	const [maxTime, setMaxTime] = useState(60);
	const [min, setMin] = useState(0);
	const [sec, setSec] = useState(0);

	const { timerNoti } = usePushNotification();

	useEffect(() => {
		let interval;

		const ticktock = () => {
			setTime((prevTime) => {
				if (prevTime <= 1) {
					clearInterval(interval);
					setIsRunning(false);
				}
				return prevTime > 0 ? prevTime - 1 : 0;
			});
		};

		const notifyTimerEnd = () => {
			timerNoti({ title: 'Timer 종료', body: `${formatTime.noti}가 지났습니다.` });
		};

		if (isRunning) {
			interval = setInterval(ticktock, 1000);
		} else {
			if (time === 0) {
				notifyTimerEnd();
			}
			clearInterval(interval);
		}

		return () => clearInterval(interval);
	}, [isRunning, time, min, sec, setTime, setIsRunning]);

	const handleMaxTime = (newMax) => {
		if (newMax <= 60) {
			setMin(0);
			setTime(sec);
		}
		setMaxTime(newMax);
	};

	const handleMin = (newMin) => {
		if (newMin >= 0 && newMin <= maxTime) {
			setMin(newMin);
			setTime(newMin * 60 + sec);
		}
	};

	const handleSec = (newSec) => {
		if (newSec >= 0 && newSec <= maxTime) {
			setSec(newSec);
			setTime(min * 60 + newSec);
		}
	};

	const handleTime = {
		set min(e) {
			handleMin(+e.target.value);
		},
		set sec(e) {
			handleSec(+e.target.value);
		},
		set max(e) {
			handleMaxTime(+e.target.value);
		},
		set time(seconds) {
			setMin(Math.floor(seconds / 60));
			setSec(seconds % 60);
			setTime(seconds);
		},
	};

	const resetTime = () => {
		setIsRunning(false);
		setTime(min * 60 + sec);
	};

	const formatTime = {
		min: () => (time < 0 ? '00' : String(Math.floor(time / 60)).padStart(2, '0')),
		sec: () => (time < 0 ? '00' : String(time % 60).padStart(2, '0')),
		get noti() {
			return `${formatTime.min()}분 ${formatTime.sec()}초`;
		},
		get mmss() {
			return `${formatTime.min()}:${formatTime.sec()}`;
		},
	};

	const pauseTime = () => setIsRunning(!isRunning);
	return {
		time,
		isRunning,
		maxTime,
		min,
		sec,
		handleTime,
		resetTime,
		formatTime,
		pauseTime,
	};
}
