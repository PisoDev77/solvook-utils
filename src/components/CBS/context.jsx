import { useState } from 'react';
import { toast } from 'react-toastify';
import '../../styles/CBS.css';

import Copy from '../../lib/Copys';

export default function ContextCBS() {
	const [res, setRes] = useState(null);

	const [metas, setMetas] = useState([{ fontSize: 16, color: '#000000', str: '', fontFamily: '' }]);

	const handleContextForm = (e, idx) => {
		const { name, value } = e.target;
		const newMetas = [...metas];
		newMetas[idx] = { ...newMetas[idx], [name]: value };
		setMetas(newMetas);
		setRes(
			newMetas.map(({ fontSize, color, str, fontFamily }) => (
				<span style={{ fontSize: fontSize / 16 + 'rem', color, fontFamily }}>{str}</span>
			))
		);
	};

	const addMeta = () => {
		setMetas([...metas, { fontSize: 16, color: '#000000', str: '' }]);
	};
	const handleClick = (e) => {
		// prettier-ignore
		const copyStr = metas
			.map(({ fontSize, color, str,fontFamily }) =>
				str.trim() !== '' ? `<span style="font-size: ${fontSize / 16}rem; color: ${color}; font-family: ${fontFamily}">${str}</span>` : ''
			)
			.join('');

		new Copy(
			'{"ctype":"kve-clip-unknown","html":"' + copyStr.replaceAll('"', '\\"') + '"}',
			'CBS-context-res'
		).copyText();
		toast.success("'복사를 완료했어요. CBS로 가서 확인해보세요.'", {
			position: 'bottom-center',
		});
	};

	const removeMeta = () => {
		if (metas.length <= 1) return;

		const _metas = metas;
		_metas.pop();
		setMetas([..._metas]);
	};

	return (
		<section className='CBS-context'>
			<section className='CBS-context-resSection'>{res ?? ''}</section>
			<section className='CBS-context-metas'>
				<button type='button' onClick={removeMeta}>
					-
				</button>
				<button type='button' className='CBS-context-res' onClick={handleClick}>
					복사하기
				</button>
				<button type='button' onClick={addMeta}>
					+
				</button>
			</section>

			<form className='CBS-context-metas'>
				{metas.map((meta, idx) => (
					<div key={idx} className='input-box'>
						<hr />
						<span>{idx + 1} Part</span>
						<div className='input-box'>
							<label htmlFor={`fontSize-${idx}`}>폰트 크기</label>
							<input
								id={`fontSize-${idx}`}
								name='fontSize'
								type='number'
								value={meta.fontSize}
								onChange={(e) => handleContextForm(e, idx)}
							/>
						</div>
						<div className='input-box'>
							<label htmlFor={`fontFamily-${idx}`}>폰트</label>
							<select
								name='fontFamily'
								value={meta.fontFamily}
								onChange={(e) => handleContextForm(e, idx)}
							>
								<option value={undefined}>폰트를 지정하세요. 안해도 되고</option>
								<option value={'Verdana, sans-serif'}>Verdana</option>
							</select>
						</div>
						<div className='input-box'>
							<label htmlFor={`color-${idx}`}>텍스트 색상</label>
							<input
								id={`color-${idx}`}
								name='color'
								type='color'
								value={meta.color}
								onChange={(e) => handleContextForm(e, idx)}
							/>
						</div>
						<div className='input-box'>
							<label htmlFor={`str-${idx}`}>텍스트 </label>
							<input
								id={`str-${idx}`}
								name='str'
								type='text'
								value={meta.str}
								onChange={(e) => handleContextForm(e, idx)}
							/>
						</div>
					</div>
				))}
			</form>
		</section>
	);
}
