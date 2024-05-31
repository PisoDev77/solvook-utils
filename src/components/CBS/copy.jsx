import { useState } from 'react';
import { toast } from 'react-toastify';
import '../../pages/CBS.css';

import Copy from '../../lib/Copys';

export default function CopyCBS() {
	const [ta, setTa] = useState('');
	const [res, setRes] = useState('');
	const [selectedOption, setSelectedOption] = useState('option1');

	const handleOptionChange = (e) => {
		setSelectedOption(e.target.value);
	};

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
	const optionsInfo = [
		{ caption: '기본', value: 'option1' },
		{ caption: '들여쓰기', value: 'option2' },
	];

	const option1U = (
		<div className='options'>
			{optionsInfo.map(({ caption, value }) => (
				<label>
					<input
						type='radio'
						value={value}
						checked={selectedOption === value}
						onChange={handleOptionChange}
					/>
					{caption}
				</label>
			))}
		</div>
	);
	const option2U = (
		<div className='options'>
			{optionsInfo.map(({ caption, value }) => (
				<label>
					<input
						type='radio'
						value={value}
						checked={selectedOption === value}
						onChange={handleOptionChange}
					/>
					{caption}
				</label>
			))}
		</div>
	);
	return (
		<section className='CBS'>
			{selectedOption === 'option2' ? option2U : option1U}

			<label htmlFor=''>복사하고 싶은 텍스트</label>
			<textarea value={ta} rows={10} onChange={handleChange}></textarea>
			<div className='copy-text' onClick={handleClick}>
				{res}
			</div>
		</section>
	);
}
