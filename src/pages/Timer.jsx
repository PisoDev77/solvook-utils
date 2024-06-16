import '../styles/Timer.css';

import { TimerCircle, TimerButtons, TimerInput, useTimer } from '../components/Timer';

const Timer = () => {
	const { time, isRunning, maxTime, min, sec, handleTime, resetTime, formatTime, pauseTime } = useTimer();

	const inputMeta = { isRunning, min, sec, maxTime, handleTime };
	const buttonsMeta = { isRunning, pauseTime, resetTime };
	const circleMeta = {
		maxTime,
		time,
		cxy: 50,
		strokeDasharray: 2 * Math.PI * 35,
		strokeDashoffset: 2 * Math.PI * 35 * (1 - (time < 0 ? 0 : time) / maxTime),
		strokeWidth: 25,
		mmss: formatTime.mmss,
		handleTime,
	};

	return (
		<article className='timer'>
			<TimerInput {...inputMeta} />
			<TimerButtons {...buttonsMeta} />
			<TimerCircle {...circleMeta} />
		</article>
	);
};

export default Timer;
