import { useEffect, useState } from 'react';
import { formatDate } from '../../lib/format';

export default function useDailyChecker() {
	const [list, setList] = useState(JSON.parse(localStorage.getItem('DailyCheckerList')) ?? []);

	useEffect(() => {
		saveList();

		return () => {
			saveStorage();
		};
	}, [list]);

	const saveList = () => {
		localStorage.setItem('DailyCheckerList', JSON.stringify(list));
	};

	const saveStorage = () => {
		const propName = formatDate(new Date());
		const obj = {};
		obj[propName] = list;

		localStorage.setItem('DailyCheckerStorage', JSON.stringify(obj));
	};

	const addItem = (item) => {
		setList([...list, { ...item, id: list.length, isDone: false }]);
	};

	const removeItem = (id) => {
		setList(list.filter((item) => item.id !== id));
	};

	const modifyItem = (item) => {
		setList(list.map((i) => (i.id === item.id ? { ...i, ...item } : i)));
	};

	const getList = () => list;

	return { getList, saveList, addItem, removeItem, modifyItem };
}
