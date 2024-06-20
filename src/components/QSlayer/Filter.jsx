import { useState, useRef } from 'react';

export default function Filter({ filterSlayers }) {
	const ref = useRef(null);

	const [filterContent, setFilterContent] = useState('');

	const handleChange = () => {
		const str = ref.current.value;
		setFilterContent(str);
		filterSlayers(str);
	};

	return (
		<section className='qslayer-filter'>
			<div className='wrapper'>
				<label htmlFor='qslayerFilter'>Filter</label>
				<input
					ref={ref}
					type='text'
					id='qslayerFilter'
					name='qslayerFilter'
					value={filterContent}
					onChange={handleChange}
				/>
				<button onClick={handleChange}>🔍</button>
			</div>
		</section>
	);
}
