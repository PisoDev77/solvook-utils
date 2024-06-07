import React, { useEffect, useState } from 'react';
import './Timer.css';

const Timer = () => {
	const [time, setTime] = useState(new Date());
	const [isRunning, setIsRunning] = useState(false);

	useEffect(() => {
		let interval;
		if (isRunning) {
			interval = setInterval(() => {
				setTime(new Date());
			}, 1000); // 1초마다 갱신
		} else {
			clearInterval(interval);
		}

		return () => clearInterval(interval);
	}, [isRunning]);

	const startTimer = () => {
		setIsRunning(true);
	};

	const stopTimer = () => {
		setIsRunning(false);
	};

	const resetTimer = () => {
		setTime(new Date());
		setIsRunning(false);
	};

	return (
		<div className='timer'>
			<h1>타이머</h1>
			<article>{time.toLocaleTimeString()}</article>
			{!isRunning ? <button onClick={startTimer}>시작</button> : <button onClick={stopTimer}>정지</button>}
			<button onClick={resetTimer}>리셋</button>
		</div>
	);
};

export default Timer;
