import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import '../styles/Timer.css';

const Timer = () => {
	const [time, setTime] = useState(0);
	const [maxTime, setMaxTime] = useState(60);
	const [min, setMin] = useState(0);
	const [sec, setSec] = useState(0);

	const [isRunning, setIsRunning] = useState(false);
	const [isCompleted, setIsCompleted] = useState(false);

	useEffect(() => {
		let interval;
		if (isRunning) {
			interval = setInterval(() => {
				setTime((prevTime) => {
					if (prevTime <= 1) {
						clearInterval(interval);
						setIsRunning(false);
						if (!isCompleted) {
							toast.success('Timer 끝', {
								position: 'bottom-center',
							});
							setIsCompleted(true);
						}
					}
					return prevTime > 0 ? prevTime - 1 : 0;
				});
			}, 1000);
		} else {
			clearInterval(interval);
		}

		return () => clearInterval(interval);
	}, [isRunning, isCompleted]);

	const handleMaxTime = (e) => {
		const newMax = +e.target.value;
		if (newMax <= 60) {
			setMin(0);
			setTime(sec);
		}
		setMaxTime(+e.target.value);
	};
	const handleMin = (e) => {
		const newMin = +e.target.value;
		if (newMin >= 0 && newMin <= 60) {
			setMin(newMin);
			setTime(newMin * 60 + sec);
		}
	};
	const handleSec = (e) => {
		const newSec = +e.target.value;
		if (newSec >= 0 && newSec <= 60) {
			setSec(newSec);
			setTime(min * 60 + newSec);
		}
	};

	const formatTime = (time) => {
		const minutes = String(Math.floor(time / 60)).padStart(2, '0');
		const seconds = String(time % 60).padStart(2, '0');
		return `${minutes}:${seconds}`;
	};

	return (
		<article className='timer'>
			<section className='time-input'>
				<div>
					<input
						name='min'
						type='number'
						value={min}
						onChange={handleMin}
						disabled={isRunning || maxTime === 60 ? true : false}
					/>
					<label htmlFor='min'>분</label>
				</div>
				<div>
					<input
						name='sec'
						type='number'
						value={sec}
						onChange={handleSec}
						disabled={isRunning ? true : false}
					/>
					<label htmlFor='sec'>초</label>
				</div>
				<select name='maxTime' value={maxTime} onChange={handleMaxTime}>
					<option value={60}>1분</option>
					<option value={3600}>1시간</option>
					<option value={7200}>2시간</option>
				</select>
			</section>
			<section className='timer-circle'>
				<svg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'>
					<circle cx='50' cy='50' r='35' />
					<text x='30' y='55' className='timer-text'>
						{formatTime(time)}
					</text>
					<circle
						className='progress'
						style={{
							strokeDasharray: 2 * Math.PI * 35,
							strokeDashoffset: 2 * Math.PI * 35 * (1 - time / maxTime),
						}}
						cx='50'
						cy='50'
						r='35'
						strokeWidth={25}
					/>
				</svg>
			</section>
			<section className='timer-buttons'>
				<button onClick={() => setIsRunning(!isRunning)}>{isRunning ? 'STOP' : 'START'}</button>

				<button
					onClick={() => {
						setIsRunning(false);
						setTime(min * 60 + sec);
					}}
					disabled={isRunning ? true : false}
				>
					RESET
				</button>
			</section>
		</article>
	);
};

export default Timer;
