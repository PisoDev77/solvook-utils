import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { formatDate } from '../Inputs';

export default function useQslayer() {
	const loadList = JSON.parse(localStorage.getItem('qslayerList')) ?? [];
	const [list, setList] = useState(loadList);
	const [slayers, setSlayers] = useState(loadList);

	useEffect(() => {
		localStorage.setItem('qslayerList', JSON.stringify(list));
	}, [list]);

	const addSlayer = (slayer) => {
		const newDate = formatDate(new Date());
		const newSlayer = [{ slayer, reg_date: newDate, update_date: newDate, answer: '', cid: list.length }, ...list];
		setList(newSlayer);
		setSlayers(newSlayer);

		toast.success(`New Question Slayer: ${slayer} Added !!`, {
			position: 'bottom-center',
		});
	};

	const updateSlayer = (newSlayer, slayers) => {
		const _list = [...list].map((slayer) => (slayer.cid === newSlayer.cid ? { ...slayer, ...newSlayer } : slayer));
		setList(_list);
		setSlayers([...slayers].map((slayer) => (slayer.cid === newSlayer.cid ? { ...slayer, ...newSlayer } : slayer)));
	};

	const deleteSlayer = (cid, slayers) => {
		setList([...list].filter((slayer) => slayer.cid !== cid));
		setSlayers([...slayers].map((slayer) => (slayer.cid === newSlayer.cid ? { ...slayer, ...newSlayer } : slayer)));
	};

	const filterSlayers = (filterStr) => {
		setSlayers([...list].filter((slayer) => slayer.slayer.includes(filterStr)));
	};

	return {
		addSlayer,
		updateSlayer,
		deleteSlayer,
		filterSlayers,
		slayers,
	};
}
