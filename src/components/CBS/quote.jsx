import { useState } from 'react';
import '../../pages/CBS.css';

export default function QuoteCBS() {
	const [originalStr, setOriginalStr] = useState('');
	const [convertedStr, setConvertedStr] = useState('');

	const handleStr = (e) => {
		const str = e.target.value;
		let bool = false;

		setOriginalStr(str);
		setConvertedStr(
			str.replaceAll("'", (match) => {
				bool = !bool;
				return bool ? '‘' : '’';
			})
		);
	};

	return (
		<form className='quote-form'>
			<textarea name='original' value={originalStr} onChange={handleStr}></textarea>
			<textarea name='convertrf' value={convertedStr} disabled></textarea>
		</form>
	);
}
