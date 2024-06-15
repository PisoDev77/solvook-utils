export default function TimerButtons({ setIsRunning, isRunning, setTime, min, sec }) {
	return (
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
	);
}
