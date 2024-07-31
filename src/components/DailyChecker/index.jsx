import '../../styles/DailyChecker.css';

import Add from './Add';
import useDailyChecker from './customHook';
import List from './List';

export default function DailyChecker() {
	const { addItem, getList, removeItem, modifyItem } = useDailyChecker();

	return (
		<section className='additional-dailychecker'>
			<h1>Daily Checker</h1>
			<Add addItem={addItem} />
			<List getList={getList} removeItem={removeItem} modifyItem={modifyItem} />
		</section>
	);
}
