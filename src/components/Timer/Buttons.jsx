export default function TimerButtons({ isRunning, pauseTime, resetTime }) {
	return (
		<section className='timer-buttons'>
			<button onClick={pauseTime}>{isRunning ? 'STOP' : 'START'}</button>
			<button onClick={resetTime} disabled={isRunning ? true : false}>
				RESET
			</button>
		</section>
	);
}
