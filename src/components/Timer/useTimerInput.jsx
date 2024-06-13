import { useState } from 'react';

export default function useTimerInput({ setTime }) {
	const [maxTime, setMaxTime] = useState(60);
	const [min, setMin] = useState(0);
	const [sec, setSec] = useState(0);

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

	return { maxTime, setMaxTime, min, handleMin, sec, handleSec, handleMaxTime };
}
