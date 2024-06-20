import '../styles/QSlayer.css';

import useQslayer from '../components/QSlayer/useQSlayer';
import { QSlayerAdd, QSlayerList, QSlayerFilter } from '../components/QSlayer';

export default function QSlayer() {
	const { slayers, addSlayer, updateSlayer, deleteSlayer, filterSlayers } = useQslayer();

	const qslatyerListProps = { updateSlayer, slayers, deleteSlayer };

	return (
		<article className='qslayer'>
			<h1>Questions Slayer</h1>
			<QSlayerAdd addSlayer={addSlayer} />
			<QSlayerFilter filterSlayers={filterSlayers} />
			<QSlayerList {...qslatyerListProps} />
		</article>
	);
}
