import Accrodion01 from './01.accrodion';
import './accordion.css';

export default function () {
	const data = [
		{ title: 'Matrix', content: '어제 매트릭스 존잼' },
		{ title: 'Matrix2; reloaded', content: '아직 보는중' },
	];
	return (
		<section className='accordion'>
			<h2>1. Accordion: 하나가 열리면 다른 item은 자동을 닫히는 경우</h2>
			<Accrodion01 data={data} />
		</section>
	);
}
