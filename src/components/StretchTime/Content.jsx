import { useState, useEffect } from 'react';

export function Youtube({ videoId }) {
	const embedUrl = `https://www.youtube.com/embed/${videoId}`;

	return (
		<section className='content' aria-labelledby='youtube-header'>
			<h2 id='youtube-header' className='a11y-hidden'>
				Youtube
			</h2>
			<iframe
				width='560'
				height='315'
				src={embedUrl}
				title='YouTube video player'
				frameBorder='0'
				allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
				referrerPolicy='strict-origin-when-cross-origin'
				allowFullScreen
			></iframe>
		</section>
	);
}

export function Timer() {
	const cycle = [10, 5, 10, 5, 10, 5, 10, 5, 10, 5];

	const [sec, setSec] = useState(cycle[0]);
	const [currentCycle, setCurrentCycle] = useState(0);
	const [isActive, setIsActive] = useState(true);

	const updateSec = () => {
		setSec((prevSec) => {
			if (prevSec > 1) {
				return prevSec - 1;
			} else if (currentCycle < cycle.length - 1) {
				setCurrentCycle((prevCycle) => prevCycle + 1);
				return cycle[currentCycle + 1];
			} else {
				setIsActive(false);
				return 0;
			}
		});
	};

	useEffect(() => {
		if (!isActive) return;

		const interval = setInterval(updateSec, 1000);
		return () => clearInterval(interval);
	}, [currentCycle, isActive]);

	return (
		<section className='content timer ' aria-labelledby='timer-header' aria-live='polite' aria-atomic='true'>
			<h2 id='timer-header' className='a11y-hidden'>
				Timer
			</h2>
			<span className='seconds' aria-label='Seconds'>
				{(sec + '').padStart(2, 0)}
			</span>
		</section>
	);
}
