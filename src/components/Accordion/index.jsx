import Accrodion01 from './01.accrodion';
import Accrodion02 from './02.accrodion';
import Accrodion03 from './03.accrodion';
import Accrodion04 from './04.accrodion';

import './accordion.css';

export default function () {
	const data = [
		{ title: 'Matrix', content: '어제 매트릭스 존잼' },
		{ title: 'Matrix2; reloaded', content: '아직 보는중' },
	];
	return (
		<section className='accordion'>
			<h2>Accordion: 하나가 열리면 다른 item은 자동을 닫히는 경우</h2>
			<Accrodion01 data={data} />
			<Accrodion02 data={data} />
			<Accrodion03 data={data} />
			<Accrodion04 data={data} />
		</section>
	);
}
