export default function TimerInput({ isRunning, min, sec, maxTime, handleTime }) {
	return (
		<section className='time-input'>
			<div>
				<input
					name='min'
					type='number'
					value={min}
					onChange={(e) => (handleTime.min = e)}
					disabled={isRunning || maxTime === 60 ? true : false}
				/>
				<label htmlFor='min'>분</label>
			</div>
			<div>
				<input
					name='sec'
					type='number'
					value={sec}
					onChange={(e) => (handleTime.sec = e)}
					disabled={isRunning ? true : false}
				/>
				<label htmlFor='sec'>초</label>
			</div>
			<select name='maxTime' value={maxTime} onChange={(e) => (handleTime.max = e)}>
				<option value={60}>1분</option>
				<option value={3600}>1시간</option>
				<option value={7200}>2시간</option>
			</select>
		</section>
	);
}
