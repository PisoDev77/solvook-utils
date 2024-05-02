import { useState } from 'react';
import './CopyCBS.css';

import { toast } from 'react-toastify';

import Copy from '../lib/Copys';

export default function CopyCBS() {
	const [ta, setTa] = useState('');
	const [res, setRes] = useState('');

	const handleChange = (e) => {
		const str = e.target.value;

		setRes('{"ctype":"kve-clip-unknown","html":"' + str.replace(/\n/g, '<br>') + '"}');

		setTa(e.target.value);
	};

	const handleClick = (e) => {
		new Copy(e.target.textContent, e.target.className).copyText();
		toast.success("'복사를 완료했어요. CBS로 가서 확인해보세요.'", {
			position: 'bottom-center',
		});
	};

	return (
		<section className='CBS'>
			<label htmlFor=''>복사하고 싶은 텍스트</label>
			<textarea value={ta} rows={10} onChange={handleChange}></textarea>
			<div className='copy-text' onClick={handleClick}>
				{res}
			</div>
		</section>
	);
}
