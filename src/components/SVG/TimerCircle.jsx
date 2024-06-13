export default function TimerCircle({
	cxy = 0,
	strokeDasharray = 0,
	strokeDashoffset = 0,
	strokeWidth = 10,
	str = '',
}) {
	return (
		<section className='timer-circle'>
			<svg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'>
				<circle cx={cxy} cy={cxy} r={cxy / 2 + 10} />
				<text x='30' y='55' className='timer-text'>
					{str}
				</text>
				<circle
					className='progress'
					style={{
						strokeDasharray,
						strokeDashoffset,
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
